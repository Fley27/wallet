const mongoose = require("mongoose");

const creditSchema = mongoose.Schema({
    amount: { type: Number, required: true },
    currency: {type: String, required: true},
    status:  { type: Boolean, default: false },
    date: { type: Date, default: Date.now() },
    phone: {type: String, required: true}, 
    email: { type: String, required: true}, 
    name: {type: String , required: true},
    outLimited: {type: Boolean, default: false},
    expectedDate: {type: Date, required: true}, 
    paidDate: { type: Date} 
});

module.exports = Credit = mongoose.model("credit", creditSchema);