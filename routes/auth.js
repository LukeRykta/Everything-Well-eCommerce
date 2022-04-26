const express = require('express');
const authrouter = express.Router();
const bcrypt = require('bcrypt');

const Auth = require('../models/Account');
const {generateJwt} = require("../helpers/processJwt");

authrouter.get("/", async (req, res) => {
    const users = await Auth.find();
    try {
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({message: "Unable to fetch users"});
    }
})

authrouter.post("/signup", async (req, res) => {
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

authrouter.get('/auth/:id', async (req, res) => {
    const { id } = req.params;
    const singleUser = await Auth.findById(id);
    try {
        return res.status(200).json(singleUser);
    } catch (error) {
        return res.status(500).json({message: "Unable to retrieve the user"})
    }
})

authrouter.put('/auth/:id', async (req, res) => {
    const { id } = req.params;
    const userToUpdate = await Auth.findByIdAndUpdate(id, req.body, {new: true});
    try {
        return res.status(202).json(userToUpdate);
    } catch (error) {
        return res.status(500).json({message: "Unable to update the user"})
    }
})

authrouter.post("/login", async (req, res) => {
    const {email, password} = req.body;
    const user = await Auth.findOne({email});
    if (!user) {
        return res.status(502).send({message: "Please check credentials"});
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
        return res.status(502).json({message: "Please check credentials"});
    }
    const token = await generateJwt(user._id);
    return res.status(200).json({token: token, user: user});
})

authrouter.delete("/auth/:id", async (req, res) => {
    const { id } = req.params;
    await Auth.findByIdAndDelete(id)
    try {
        return res.status(203).json({message: "Successfully deleted the user"});
    } catch (error) {
        return res.status(500).json({message: "Unable to delete the user"})
    }
})

module.exports = authrouter;