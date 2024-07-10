const express = require('express');
const { verifyToken, verifyTokenAndAuthorisation, verifyTokenAndAdmin } = require('./verifyToken');
const router = express.Router();
const Cart = require('../models/Cart')
// for create cart
router.post("/", verifyToken, async (req, res) => {

    const newCart = new Cart(req.body);
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json(err);
    }
});


// for update cart product
router.put("/:id", verifyToken, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json(err);
    }
})


// for delete cart product
router.delete("/:id", verifyToken, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted...")
    } catch (err) {
        res.status(500).json(err);
    }
})

// for getting user cart
router.get("/find/:userId", verifyTokenAndAuthorisation, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
})

// for getting all the cart products

router.get("/", verifyTokenAndAdmin, async(req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;