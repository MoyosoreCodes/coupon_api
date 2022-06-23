const couponService = require('../services/couponService');
const ruleService = require('../services/ruleService');
const discountService = require('../services/discountService');

module.exports = {
    /**
     * * controller to create a new a coupon
     * @param {Request} req
     */
    newCoupon: async req => {
        try {
            // validations
            if (Object.values(req.body).includes('') || Object.values(req.body).includes(' ') || !Object.keys(req.body).length) {
                return {
                    status: 400,
                    message: 'Please fill in all fields'
                }
            }
            let {type, amount, description} = req.body;
            if (!type || !amount) {
                return {
                    status: 400,
                    message: 'Please provide coupon type and amount'
                }
            }
            // if the rule is not found
            // coupon is invalid
            description = description || `${amount} off (${type})`
            let couponData = {
                description,
                amount_off: amount,
                percent_off: amount,
                ...req.body,
            }
            // setting amount_off or percent_off by the discount type provided 
            if(type === "fixed") delete couponData['percent_off'];
            if(type === "percentage") delete couponData['amount_off'];
            
            // generates random coupon code with format 123-456
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const length = 6;
            generatedCode = ''
            for (let i = 0; i <= length; i++) {
                generatedCode += i == 3 ? '-' : characters.charAt(Math.floor(Math.random() * characters.length));
            }
            couponData.code = generatedCode
            // couponData.discounts = [];
            // const discount = await discountService.createDiscount(type);
            // const [discountData] = discount.data
            // console.log(discountData.toJSON().id);
            // if(!discountData) return { status: discount.status, message: discount.message }
            // couponData.discounts.push(discountData.toJSON().id)
            const {status, message, data} = await couponService.createCoupon(couponData);
            // create discount type if not exists
            // add discount to coupon
            return {status, message, data}
        } catch (error) {
            console.log(error);
            return {
                status: 500,
                message: `${error.message}`
            }
        }
    },
}