const express = require('express');
const itemrouter = express.Router();

const Item = require('../models/Item');

// GET/allItems
itemrouter.get('/item', async (req, res) => {
    const items = await Item.find();
    try {
        return res.status(200).json(items)
    } catch (error) {
        return res.status(500).json({message: "Unable get books"});
    }
})

// GET/itemById
itemrouter.post('/item', async (req, res) => {
    const itemToCreate = await Item.create(req.body);
    try {
        return res.status(201).json(itemToCreate);
    } catch (error) {
        return res.status(500).json({message: "Unable to create item"})
    }
})
// POST/item

// PUT/item -> update

// DELETE/item/id

module.exports = itemrouter;