const Coupon = require('../models/coupon');
const Rules = require('../models/rules');
const DiscountTypes = require('../models/discountTypes');

module.exports = {
    /**
     * * creates a new rule
     * @param {object} data 
     */
    createRule: async data => {
        try {
            const newRule = await Rules.create(data);
            return {
                status: newRule ? 201 : 400,
                message: newRule ? "Rule created successfully" : "Error creating rule",
                data: newRule
            }
        } catch (error) {
            console.log(error);
            return {
                status: 500,
                message: `Server error: ${error.message}`
            }
        }
    },

    /**
     * * retrieves all rules
     */
    viewRules: async () => {
        try {
            const allRules = await Rules.findAll();
            const length = allRules.length > 0;
            return {
                status: length ? 200 : 400,
                message: length ? "Rules retrieved successfully" : "Error retrieving rules",
                data: allRules
            }
        } catch (error) {
            console.log(error);
            return {
                status: 500,
                message: `Server error: ${error.message}`
            }
        }
    }, 

    /**
     * * retrieves a rule by id
     * @param {number} id
     */
    viewRule: async (id) => {
        try {
            const rule = await Rules.findByPk(id);
            return {
                status: rule ? 200 : 404,
                message: rule ? "Rule retrieved successfully" : "Rule not found",
                data: rule
            }
        } catch (error) {
            console.log(error);
            return {
                status: 500,
                message: `Server error: ${error.message}`
            }
        }
    } 
}