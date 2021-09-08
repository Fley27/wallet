const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema({
    alert: { type: Number, required: true },
    date: { type: Date, default: Date.now() },
    title: { type: String, required: true},
    id: { type: String, required: true},
});

module.exports = notification = mongoose.model("notification", notificationSchema);