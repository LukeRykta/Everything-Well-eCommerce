const express = require('express');
const Purchase = require('../models/Purchase');
const purchaserouter = express.Router();

purchaserouter.get("/", async (req, res) => {
    const purchase = await Purchase.find()
        .populate("item", ["title", "vendor"])
        .populate("user", ["name", "role"]);
    try {
        return res.status(200).json(purchase);
    } catch (error) {
        return res.status(500).json({message: "Unable to get purchases"})
    }
});

purchaserouter.get("/purchase/:id", async (req, res) => {
    const { id } = req.params;
    const singlePurchase = await Purchase.findById(id);
    try {
        return res.status(200).json(singlePurchase);
    } catch (error) {
        return res.status(500).json({message: "Unable to get single purchase"})
    }
});

purchaserouter.post("/purchase", async (req, res) => {
    const purchaseToCreate = await Purchase.create(req.body);
    try {
        return res.status(201).json(purchaseToCreate);
    } catch (error) {
        return res.status(500).json({message: "Unable to create purchase"})
    }
});

purchaserouter.put("/purchase/:id", async (req, res) => {
    const { id } = req.params;
    const purchaseToUpdate = await Purchase.findByIdAndUpdate(id, req.body, {new: true});
    try {
        return res.status(202).json(purchaseToUpdate);
    } catch (error) {
        return res.status(500).json({message: "Can't update purchase id"})
    }
});

purchaserouter.delete("/purchase/:id", async (req, res) => {
    const { id } = req.params;
    const purchaseToDelete = await Purchase.findByIdAndDelete(id);

    try {
        return res.status(203).json(purchaseToDelete);
    } catch (error) {
        return res.status(500).json({message: "Can't delete purchase id"})
    }
});

module.exports = purchaserouter;