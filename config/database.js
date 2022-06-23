const {Sequelize} = require('sequelize');
require('dotenv').config();

// const user = "shfhzbutvuxmkz";
// const password = "8811eee095ab45a347b2ef8711d45511d3ae95a4c3208ffffc4d55f83824985c";
// const host = "ec2-44-197-128-108.compute-1.amazonaws.com";
// const port = process.env.PG_PORT;
// const database = "d9s2gurjruonh7";

// const isProduction = process.env.NODE_ENV === 'production';
// const connectionString = ''

const sequelize = new Sequelize("postgres://shfhzbutvuxmkz:8811eee095ab45a347b2ef8711d45511d3ae95a4c3208ffffc4d55f83824985c@ec2-44-197-128-108.compute-1.amazonaws.com:5432/d9s2gurjruonh7", 
    {
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
);

module.exports = sequelize;