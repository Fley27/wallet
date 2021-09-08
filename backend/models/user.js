const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password:  { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    country: { type: String, required: true },
    date: { type: Date, default: Date.now() },    
});

module.exports = User = mongoose.model("user", userSchema);