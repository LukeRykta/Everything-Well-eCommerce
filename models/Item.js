const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const ItemSchema = Schema (
    {
        title: {
            type: String,
            required: true
        },
        vendor: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        price: {
            type: Number
        },
        quantity: {
            type: Number
        },
        track: {
            type: String,
            required: true
        }
    }
)

module.exports = model("Item", ItemSchema)