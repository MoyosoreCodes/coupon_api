const {Sequelize} = require('sequelize');
require('dotenv').config();

const user = "xqocvuvghphgpi";
const password = "9094958d9e7574d210b09e2ffc472f630aca45b254499016924966e43fcee657";
const host = "ec2-18-204-142-254.compute-1.amazonaws.com";
const port = 5432;
const database = "d9efvngbpnudml";

// const isProduction = process.env.NODE_ENV === 'production';
// const connectionString = ''

const sequelize = new Sequelize(database, user, password,
    {
        host,
        logging: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        dialect:'postgres'
        // define: {
        //     freezeTableName: true
        // }
    }
);

module.exports = sequelize;