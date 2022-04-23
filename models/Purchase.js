const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const PurchaseSchema = Schema (
    {
        account: {
            type: Schema.Types.ObjectId,
            ref: "Account",
            required: true
        },
        date: { // Date the purchase was made (eg date when customer clicked "checkout")
            type: Date,
            default: null
        },
        dateProcessed: { // Date the purchase was processed (we can ignore or simulate this) eg after verified it's in database
            type: Date,
            default: null
        },
        cart: { // Cart with a list of items in it. If this is confusing let me know. -pat
            type: [
                { // Not 100% on if this will work as intended. Intent is store items purchased and have quantity of item be # purchased
                    type: Schema.Types.ObjectId,
                    ref: "Item"
                }
            ],
        },
        shippingAddress: { // Shipping address for checkout 
            firstname: {
                type: String,
                required: true
            },
            lastname: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            state: {
                type: String,
                required: true
            },
            zipcode: { // Length of string needs to be validated or perhaps having it stored as a number would be simpler
                type: String,
                required: true
            },
        },
        payment: { // Payment info, type (eg credit/debit/store). Types may be best as number or string for validation, lmk or just update it -pat
            type: {
                type: String,
                required: true
            },
            cardNumber: { // String felt simpler but if number is easier when taking in input, change type 
                type: String,
                required: true
            },
            name: { // Name on card
                type: String,
            },
            securityNum: { // Security number on card
                type: String,
                required: true
            },
            amountPaid: { // 
                type: Number,
                required: true
            }
        }

    }
)

module.exports = model("Purchase", PurchaseSchema)