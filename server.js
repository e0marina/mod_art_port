const express = require('express');
const sendMail = require('./mail.js');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const session = require('express-session');
require('dotenv').config();
const sequelize = require('./config/config');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
const routes = require('./controllers');

//data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

//post route for email
app.post('/email', (req, res) => {
  //send email
  console.log('Data: ', req.body);

  const { subject, email, text } = req.body;

  sendMail(email, subject, text, function (err, data) {
    if (err) {
      res.status(500).json({ message: 'Internal Error' });
    } else {
      res.json({ message: 'Email sent!!!!' });
    }
  });
});

//routes
app.use(routes);

app.get('/', function (req, res) {
  res.json(path.join(__dirname, 'public/index.html'));
});
//once build made use this below instead "./client/build/index.html"
// Send every request to the React app
// Define any API routes before this runs
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
  sequelize.sync({ force: false });
});
