const express = require('express');
const { verifyTokenAndAdmin } = require('./verifyToken');
const router = express.Router();
const Product = require('../models/Product')

// for create product
router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);

    } catch (error) {
        res.status(500).json(error);
    }

})


// for update product
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
})


// for delete product
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted...")
    } catch (error) {
        res.status(500).json(error);
    }
})

// for getting the product
router.get("/find/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// for getting all the products
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const newCategory = req.query.category;
    try {
        let products;
        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(5)
        } else if (newCategory) {
            products = await Product.find({ categories: { $in: [newCategory] } })
        } else {
            products = await Product.find()
        }
        res.status(200).json(products)
    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = router;