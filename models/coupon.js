const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/database');

class Coupon extends Model {}

Coupon.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    code: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
    }, 
    description: {
        type: DataTypes.TEXT,
    }, 
    // rules: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: 'Rules',
    //         key: 'id'
    //     }
    // }, 
    currency: {
        type: DataTypes.TEXT,
        defaultValue: 'NGN',
    },
    isValid: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }, 
    amount_off: {
        type: DataTypes.DOUBLE(10, 2),
        defaultValue: null
    }, 
    percent_off: {
        type: DataTypes.DOUBLE(10, 2),
        defaultValue: null
    }, 
    // percentage, mixed, fixed
    // discountType: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: 'DiscountTypes',
    //         key: 'id'
    //     }
    // }
}, {sequelize, timestamps: true, modelName: 'Coupon'});

// Coupon.hasMany(Rules, {as: 'rules'});
// Rules.belongsTo(Coupon, {as: 'coupon'})
// Coupon.hasMany(DiscountTypes)
// Coupon.sync({force: true});

module.exports = Coupon;