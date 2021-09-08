const express = require("express");
const router = express.Router();
const Expense = require("../../models/expense");
const Operation = require("../../models/operation");

// Create an expense

router.post("/", async (req, res)=>{
    try {
        const {amount, user, category, activity, description} = req.body;
        const operation = new Operation({amount, currency, user, category});
        await operation.save();
        if(!operation)
            return res.status(404).json({msg: "Process interrupted"});
        const expense = new Expense({operation: operation, activity, description});
        await expense.save();
        return res.json({operation,expense})
    } catch (error) {
        console.log(`Server : ${error}`);
        return res.status(500).json({msg: `Server : ${error}`});
    }
})

// Fetch the last 20 expenses

router.get("/", async (req, res)=>{
    try {
        const expenses = await Expense.find().populate("operation").limit(20).sort({date: 1});
        return res.json(expenses);
    } catch (error) {
        console.log(`Server : ${error}`);
        return res.status(500).json({msg: `Server : ${error}`});
    }
})

// Fetch a specific expense

router.get("/one", async (req, res)=>{
    try {
        const {id} = req.body;
        const expense = await Expense.findById(id);
        return res.json(expense);
    } catch (error) {
        console.log(`Server : ${error}`);
        return res.status(500).json({msg: `Server : ${error}`});
    }
})

module.exports = router; 