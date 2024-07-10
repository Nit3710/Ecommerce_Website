const express = require('express');
const { verifyTokenAndAuthorisation, verifyTokenAndAdmin } = require('./verifyToken');
const User = require('../models/User')

const router = express.Router();

// for update the user
router.put("/:id", verifyTokenAndAuthorisation, async (req, res) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
    }
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updateUser)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// for delete the user
router.delete("/:id", verifyTokenAndAuthorisation, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")
    } catch (error) {
        return res.status(500).json(error)
    }
})


// for getting the user
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...others } = user._doc;
        res.status(200).json(others)
    } catch (error) {
        return res.status(500).json(error)
    }
})


// for getting all the user
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new;
    try {
        const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find()

        res.status(200).json(users)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// get user stats
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            { $project: { month: { $month: "$createdAt" } } },
            {
                $group: {
                    _id: "$month", total: {
                        $sum: 1
                    }
                }
            }
        ])
        console.log(data)
        res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }


})


module.exports = router;