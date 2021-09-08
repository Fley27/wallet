const mongoose = require("mongoose");

const loanSchema = mongoose.Schema({
    lender: { type: mongoose.Schema.Types.ObjectId, required: true, ref : "user"},
    credit: { type: mongoose.Schema.Types.ObjectId, required: true, ref : "credit"},
});

module.exports = Loan = mongoose.model("loan", loanSchema);