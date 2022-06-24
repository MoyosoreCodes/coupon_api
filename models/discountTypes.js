const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/database');

class DiscountTypes extends Model {}

DiscountTypes.init({
    id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true,
    },  
    type: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
    },
    couponId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Coupon',
            key: 'id',
        }
    }
}, {sequelize, timestamps: true, modelName: "Discounts"})

// DiscountTypes.sync();
module.exports = DiscountTypes;