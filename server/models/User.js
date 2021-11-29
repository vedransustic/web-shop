const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
        username: { type: String, required: false, unique: false },
        email: { type: String, required: false, unique: false },
        password: { type: String, required: false },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);