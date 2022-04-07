const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    action: {
        type: String,
        required: [true, 'The todo text field is required'],
    },
});

// Create model for todo
const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;