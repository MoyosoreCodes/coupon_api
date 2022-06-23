const express = require('express');
const router = express.Router();
const ruleController = require('../controllers/ruleController');
const ruleService = require('../services/ruleService');

// route to create rules for coupons
router.post('/:code', async (req, res) => {
    try {
        const {status, message} = await ruleController.newRuleForCoupon(req);
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
        const {status, message, data} = await ruleService.viewRules();
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