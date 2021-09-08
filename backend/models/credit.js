const mongoose = require("mongoose");

const creditSchema = mongoose.Schema({
    amount: { type: Number, required: true },
    currency: {type: Number, required: true},
    status:  { type: Boolean, default: false },
    date: { type: Date, default: Date.now() },
    phone: {type: Number, },
    email: { type: String, required: true},
    outLimited: {type: Boolean, default: false},
    expectedDate: {type: Date, required: true}, 
    dueDate: { type: Date, required: true }
});

module.exports = Credit = mongoose.model("credit", creditSchema);