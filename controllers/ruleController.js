const ruleService = require('../services/ruleService');
const couponService = require('../services/couponService');

module.exports = {
    newRuleForCoupon: async req => {
        try {
            if (Object.values(req.body).includes('') || Object.values(req.body).includes(' ') || !Object.keys(req.body).length) {
                return {
                    status: 400,
                    message: 'Please fill in all fields'
                }
            }
            
            const {body, params} = req
            const {type} = body;
            const {code} = params;
            if(!type || !code) return {status: 400, message: 'Please provide a rule type or coupon code'}
            const {status, message, data} = await couponService.viewCoupon({code});
            if(!data || status !== 200) return {status, message}

            const ruleData = {
                type, couponId: data.id
            }

            // create rule with ruleData;
            const newRule = await ruleService.createRule(ruleData);
            if(newRule.status !== 201) return { status: newRule.status, message: newRule.message }
            // add rule to coupon
            // activate coupon
            await couponService.updateCoupon(data.id, {isValid: true});
            return await couponService.addRule(data, newRule.data.id)


            // return 
        } catch (error) {
            // console.log(error);
            console.log(error.name);
            return {
                status: 500,
                message: `${error.message}`
            }
        }
    }
}