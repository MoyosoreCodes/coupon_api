const express = require('express');
const router = express.Router();
const discountController = require('../controllers/discountController');
const discountService = require('../services/discountService');

// route to create discounts
router.post('/:code', async (req, res) => {
    try {
        const {status, message} = await discountController.newDiscountForCoupon(req);
        return res.status(status).json({status, message})
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500, 
            message: `error at route: ${error.message}`
        });
    }
});

router.get('/', async (req, res) => {
    try {
        const {status, message, data} = await discountService.viewDiscounts();
        return res.status(status).json({status, message, data})
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500,
            message: `error at route: ${error.message}`
        });
    }
});

module.exports = router;