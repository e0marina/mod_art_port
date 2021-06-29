const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/login', withAuth, (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
