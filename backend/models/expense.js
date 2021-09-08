const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema({
    operation: { type: mongoose.Schema.Types.ObjectId, required: true, ref : "operation"},
    activity: { type: String, required: true},
    description: {type: String , required: true},
    date: { type: Date, default: Date.now() },
});

module.exports = Expense = mongoose.model("expense", expenseSchema);