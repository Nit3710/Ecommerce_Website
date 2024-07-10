const express = require('express')
const router = express.Router();
const User = require('../models/User');
const cryptojs = require('crypto-js')
const jwt = require('jsonwebtoken');
// register api

router.post("/register", async (req, res) => {
    const newuser = new User({
        username: req.body.username,
        email: req.body.email,
        password: cryptojs.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),

    })
    try {
        const saveduser = await newuser.save();
        res.status(201).json(saveduser)
    } catch (error) {
        res.status(500).json(error);
    }
})



//login api

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        !user && res.status(401).json("wrong credentials")

        const hashedPassword = cryptojs.AES.decrypt(user.password, process.env.SECRET_KEY);
        const OriginalPassword = hashedPassword.toString(cryptojs.enc.Utf8);
        OriginalPassword !== req.body.password &&
            res.status(401).json("wrong credentials")
        const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_KEY, { expiresIn: "3d" })

        const { password, ...others } = user._doc;
        res.status(200).json({...others, accessToken});
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;