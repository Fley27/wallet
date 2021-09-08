const mongoose = require("mongoose");

const operationSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true},
    amount: { type: Number, required: true },
    category:  { type: String, required: true },
    currency:  { type: String, required: true },
    date: { type: Date, default: Date.now() },
});

module.exports = Operation = mongoose.model("operation", operationSchema);