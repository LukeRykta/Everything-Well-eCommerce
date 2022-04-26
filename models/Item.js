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
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            default: 0
        },
        category: { //Category (eg nutrition, wellness, fitness) May be better redone as "tags"?
            type: Array,
        },
        description: { // Item description
            type: String,
            required: true
        },
        discount: { // Including for possible future use. eg 5 = 5% discount
            type: Number
        },
        track: {
            type: String,
            required: true
        },
        dateAdded: { // Date item was added
            type: Date,
            default: Date.now()
        },
        dateModified: { // Date modified (eg updating quantity or changing name) Leaving open for future implementation
            type: Date,
            default: null
        }
    }
)

module.exports = model("Item", ItemSchema)
