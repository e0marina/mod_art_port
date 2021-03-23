// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/config');

// Initialize model (table) by extending off Sequelize's Model class
class Art extends Model { }

Art.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,

        },
        smImageUrl: {
            type: DataTypes.STRING,

        },
        lgImageUrl: {
            type: DataTypes.STRING,

        },
        description: {
            type: DataTypes.STRING,

        },
        category: {
            type: DataTypes.STRING,

        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    },
    {
        sequelize,
    }
);

module.exports = { Art };