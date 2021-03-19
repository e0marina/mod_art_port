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
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        smImageUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lgImageUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'art',
    }
);

module.exports = Art;