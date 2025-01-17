const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Wish = sequelize.define('Wish', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Wish;
