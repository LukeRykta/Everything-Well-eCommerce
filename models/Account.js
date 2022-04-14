const mongoose = require('mongoose');

const { Schema, model } = mongoose;


// old schema kept for ease of reference for now
// const UserSchema = Schema (
//     {
//         name: {
//             type: String,
//             required: true,
//             trim: true
//         },
//         email: {
//             type: String,
//             required: true,
//             trim: true,
//             unique: true
//         },
//         password: {
//             type: String,
//             required: true,
//         },
//         role: {
//             type: String,
//             required: true,
//             enum: ["USER", "ADMIN"],
//             default: "USER"
//         }
//     }
// );

const UserSchema = Schema (
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
            enum: ["USER", "ADMIN"],
            default: "USER"
        },
        createDate: {
            type: Date,
            default: Date.now()
        }


    }
);


UserSchema.methods.toJSON = function () {
    const {password, __v, ...user} = this.toObject();
    return user;
}

module.exports = model("Account", UserSchema);