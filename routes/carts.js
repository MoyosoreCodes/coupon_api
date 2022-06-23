const express = require('express');
const router = express.Router();

const cartData = {
    items: [
        {
            id: 1,
            name: 'Item 1',
            price: 100.79,
        }, 
        {
            id: 2,
            name: 'Item 2',
            price: 100.99,
        },
        {
            id: 3,
            name: 'Item 3',
            price: 150,
        }
    ]
}
router.get('/', (req, res) => {
    try {
        const total = cartData.items.reduce((acc, item) => {return acc + item.price}, 0);
        const newCartData = {
            ...cartData,
            total,
            id: Math.floor(Math.random() * 99999)
        }
        return res.status(200).json({
            status: 200, 
            message: 'successfully retrieved cart items',
            data: newCartData
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ 
            status: 500, 
            message: error.message
        })
    }
})


module.exports = router;