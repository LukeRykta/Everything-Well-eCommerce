const express = require('express');
const itemrouter = express.Router();
const Item = require('../models/Item');

// GET/allItems
itemrouter.get('/', async (req, res) => {
    const items = await Item.find();
    try {
        return res.status(200).json(items)
    } catch (error) {
        return res.status(500).json({message: "Unable get books"});
    }
})

// GET/item/:id -> singleItem
itemrouter.get('/item/:id', async (req, res) => {
    const { id } = req.params;
    const singleItem = await Item.findById(id);
    try {
        return res.status(200).json(singleItem);
    } catch (error) {
        return res.status(500).json({message: "Unable to retrieve the item"})
    }
})

// POST/itemById
itemrouter.post('/item', async (req, res) => {
    const itemToCreate = await Item.create(req.body);
    try {
        return res.status(201).json(itemToCreate);
    } catch (error) {
        return res.status(500).json({message: "Unable to create item"})
    }
})

// PUT/item -> update
itemrouter.put('/item/:id', async (req, res) => {
    const { id } = req.params;
    const itemToUpdate = await Item.findByIdAndUpdate(id, req.body, {new: true});
    try {
        return res.status(202).json(itemToUpdate);
    } catch (error) {
        return res.status(500).json({message: "Unable to update the item"})
    }
})

// DELETE/item/id
itemrouter.delete("item/:id", async (req, res) => {
    const { id } = req.params;
    await Item.findByIdAndDelete(id)
    try {
        return res.status(203).json({message: "Successfully deleted the item"});
    } catch (error) {
        return res.status(500).json({message: "Unable to delete the item"})
    }
})

module.exports = itemrouter;