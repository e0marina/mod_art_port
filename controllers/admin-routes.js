const router = require('express').Router();
const { User } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/login', withAuth, (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/hello');
    return;
  }

  res.render('login');
});

module.exports = router;
