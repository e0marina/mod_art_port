const seedArt = require('./art-seeds');

const sequelize = require('../config/config');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedArt();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    process.exit(0);
};
seedAll();