const seedUsers = require('./user-seeds');
const seedArt = require('./art-seeds');

const sequelize = require('../config/config');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- CATEGORIES SEEDED -----\n');
  await seedArt();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  process.exit(0);
};
seedAll();
