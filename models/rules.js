const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/database');


class Rules extends Model {}

Rules.init({
    id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true,
    },
    type: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {sequelize, timestamps: true, modelName: 'Rule'})

// Rules.belongsTo(Coupon, {as: 'coupon'})  
// Rules.sync({force: true});
module.exports = Rules;