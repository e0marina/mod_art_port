const router = require('express').Router();
const artRoutes = require('./art-routes');

router.use('/artwork', artRoutes);

module.exports = router;