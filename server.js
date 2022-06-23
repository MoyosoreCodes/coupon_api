const express = require("express");
const morgan = require('morgan');
const sequelize = require('./config/database');
const syncDB = require('./config/associations');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {console.log('Connection has been established successfully.');})
  .catch((err) => {console.log(`Unable to connect to the database: ${err}`);});

syncDB(sequelize);
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiLink = '';

app.get('/', (req, res) => {
  return res.send(`coupon api running click <a href=${apiLink}> here </a> to view documentation`);
})

app.use('/cart', require('./routes/carts'));
app.use('/coupon', require('./routes/coupons'));
app.use('/rule', require('./routes/rules'));
app.use('/discount', require('./routes/discounts'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});