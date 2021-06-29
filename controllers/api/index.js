const router = require('express').Router();
const artRoutes = require('./art-routes');
const userRoutes = require('./user-routes');

router.use('/artwork', artRoutes);
router.use('/user', userRoutes);

module.exports = router;
