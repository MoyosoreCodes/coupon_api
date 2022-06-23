const express = require('express');
const router = express.Router();
const couponController = require('../controllers/couponController');
const couponService = require('../services/couponService');


router.post('/', async (req, res) => {
    try {
        const {status, message, data} = await couponController.newCoupon(req);
        return res.status(status).json({status, message, data: data.code})
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
        const {status, message, data} = await couponService.viewCoupons();
        return res.status(status).json({status, message, data})
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 500, 
            message: `error at route: ${error.message}`
        });
    }
});

router.get('/:code', async (req, res) => {
    try {
        console.log(req.query)
        const {status, message, data} = await couponService.viewCoupon({code: req.params.code});
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