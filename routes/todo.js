const express = require('express');
const Todo = require('../models/Todo');
const todorouter = express.Router();

todorouter.get('/todos', (req, res, next) => {
    // This will return all the data, exposing only the id and action field to the client
    Todo.find({}, 'action')
        .then((data) => res.json(data))
        .catch(next);
});

todorouter.post('/todos', (req, res, next) => {
    if (req.body.action) {
        Todo.create(req.body)
            .then((data) => res.json(data))
            .catch(next);
    } else {
        res.json({
            error: 'The input field is empty',
        });
    }
});

todorouter.delete('/todos/:id', (req, res, next) => {
    Todo.findOneAndDelete({ _id: req.params.id })
        .then((data) => res.json(data))
        .catch(next);
});

module.exports = todorouter;