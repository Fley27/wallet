const mongoose = require("mongoose");

const incomeSchema = mongoose.Schema({
    operation: { type: mongoose.Schema.Types.ObjectId, required: true, ref : "operation"},
    source: { type: String, required: true,},
    date: { type: Date, default: Date.now() },
});

module.exports = Income = mongoose.model("income", incomeSchema);