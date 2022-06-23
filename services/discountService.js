const Coupon = require('../models/coupon');
const DiscountTypes = require('../models/discountTypes');
const Rules = require('../models/rules');

module.exports = {
    /**
     * * creates a new dicount type
     * @param {object} data
     */
    createDiscount: async (data) => {
        try {
            const discount = await DiscountTypes.create(data)
            return {
                status: discount ? 201 : 400,
                message: discount ? "Discount created successfully" : "Error creating discount",
                data: discount
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
     * * retrieves all discounts
     */
    viewDiscounts: async () => {
        try {
            const discounts = await DiscountTypes.findAll();
            const length = discounts.length > 0;
            return {
                status: length ? 200 : 404,
                message: length ? "Discounts retrieved successfully" : "Not discounts found",
                data: discounts
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
     * * retrieves a discount by id
     * @param {number} id
     */
    viewDiscountById: async (id) => {
        try {
            const discount = await DiscountTypes.findByPk(id);
            return {
                status: discount ? 200 : 404,
                message: discount ? "Discount retrieved successfully" : `No discount with id: ${id} found`,
                data: discount
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
     * * retrieves discount by type
     * @param {string} type
     */
    viewDiscountByType: async (type) => {
        try {
            const discount = await DiscountTypes.findOne({
                where: { type }
            });
            return {
                status: discount ? 200 : 404,
                message: discount ? "Discount retrieved successfully" : `No discount with type: ${type} found`,
                data: discount
            }
        } catch (error) {
            console.log(error);
            return {
                status: 500,
                message: `Server error: ${error.message}`
            }
        }
    },
    updateDiscount: async (data, discountId) => {
        try {
            const discount = await Coupon.update({couponId: data}, {
                where: {id: discountId}
            });
            return {
                status: discount ? 200 : 400,
                message: discount ? "discount updated successfully" : "Error updating discount",
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