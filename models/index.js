// //import models
const Art = require('./Art');
const User = require('./User');

// //create associations
// User.hasMany(Art, {
//   foreignKey: 'user_id',
// });

// Art.belongsTo(User, {
//   foreignKey: 'user_id',
// });

module.exports = { Art, User };
