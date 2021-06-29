const router = require('express').Router();
const apiRoutes = require('./api/art-routes');
const adminRoutes = require('./admin-routes');

router.use('/api', apiRoutes);
router.use('/', adminRoutes);

router.use((req, res) => {
  res.send('<h1>Wrong Route!</h1>');
});

module.exports = router;
