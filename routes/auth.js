const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const Auth = require('../models/User');

router.post("/signup", async (req, res) => {
    const {email} = req.body;
    const testEmail = await Auth.findOne({email});
    if (testEmail) {
        return res.status(500).json({message: "Unable to sign up, please try again"})
    }
    const user = new Auth(req.body);
    try {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(req.body.password, salt);
        await user.save();
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({message: "Unable to create user"});
    }
})

router.post("/login", async (req, res) => {
    const {email, password} = req.body;
    const user = await Auth.findOne({email});
    if (!user) {
        return res.status(500).json({message: "Please check credentials"})
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
        return res.status(500).json({message: "Please check credentials"});
    }
    //todo possibly generate JSON webtoken
    return res.status(200).json(user);
})

module.exports = router;