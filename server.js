const express = require("express");
const sendMail = require("./mail.js");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
require("dotenv").config();
const sequelize = require("./config/config");
//data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//post route for email
app.post("/email", (req, res) => {
  //send email
  // const {subject, email, text } = req.body;
  console.log("Data: ", req.body);

  const { subject, email, text } = req.body;

  sendMail(email, subject, text, function (err, data) {
    if (err) {
      res.status(500).json({ message: "Internal Error" });
    } else {
      res.json({ message: "Email sent!!!!" });
    }
  });
});



app.get("/", function (req, res) {
  res.json(path.join(__dirname, "public/index.html"));
});
//once build made use this below instead "./client/build/index.html"
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
  sequelize.sync({ force: false })
});
