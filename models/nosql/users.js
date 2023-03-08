const mongoose = require("mongoose")

const UserScheme = new mongoose.Schema(

    {
        name: {
            type: String
        },
        age: {
            type: Number
        },
        email: {
            type: String,
            unique: true
        },
        passaword: {
            type: String
        },
        role: {
            type: ["user", "admin"],
            default: "user",

        }
    },

    {
        timestamps: true,  //todo createdAT,updatedAt
        versionkey: false
    },

);

module.exports = mongoose.model("Users", UserScheme)