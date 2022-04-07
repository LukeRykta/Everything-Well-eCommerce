const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const PurchaseSchema = Schema (
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        item: {
            type: Schema.Types.ObjectId,
            ref: "Item",
            required: true
        }
    }
)

module.exports = model("Purchase", PurchaseSchema)