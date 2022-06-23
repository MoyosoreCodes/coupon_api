const {Sequelize} = require('sequelize');
require('dotenv').config();

const user = process.env.PG_USER;
const password = process.env.PG_PASSWORD;
const host = process.env.PG_HOST;
const port = process.env.PG_PORT;
const database = process.env.PG_DATABASE;

// const isProduction = process.env.NODE_ENV === 'production';
// const connectionString = ''

const sequelize = new Sequelize(database,user,password,{
    host, dialect: 'postgresql', logging: false
});

module.exports = sequelize;