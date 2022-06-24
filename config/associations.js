const Coupon = require('../models/coupon');
const Rules = require('../models/rules');
const DiscountTypes = require('../models/discountTypes');

const syncDB = async (sequelizeInstance) => {
    Coupon.hasMany(Rules, {as: 'rules', foreignKey: 'couponId'});
    Rules.belongsTo(Coupon, {as: 'coupon'});
    Coupon.hasMany(DiscountTypes, {as: 'discounts', foreignKey: 'couponId'});
    DiscountTypes.belongsTo(Coupon, {as: 'coupon'});

    await sequelizeInstance.sync({force:true});
    // await Coupon.sync()
    // await Rules.sync()
    // await DiscountTypes.sync()
}

module.exports = syncDB;