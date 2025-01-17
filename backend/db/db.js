const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME, // DB Name
  process.env.DB_USER, // DB User
  process.env.DB_PASSWORD, // DB Password
  {
    host: process.env.DB_HOST, // MySQL Container Host
    dialect: 'mysql',
  }
);

sequelize
  .authenticate()
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Unable to connect to the database:', err));

module.exports = sequelize;
