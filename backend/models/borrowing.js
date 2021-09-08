const mongoose = require("mongoose");

const borrowingSchema = mongoose.Schema({
    borrower: { type: mongoose.Schema.Types.ObjectId, required: true, ref : "user"},
    credit: { type: mongoose.Schema.Types.ObjectId, required: true, ref : "credit"},
    date: {type: Date, default: Date.now()}
});

module.exports = Borrowing = mongoose.model("borrowing", borrowingSchema);