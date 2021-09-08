const express = require("express");
const router = express.Router();
const Income = require("../../models/income");
const Operation = require("../../models/operation");
const ObjectId = require("bson-objectid");

// Create an income

router.post("/", async (req, res)=>{
    try {
        const {amount, user, currency, category, source} = req.body;
        const operation = new Operation({amount, currency, user, category});
        await operation.save();
        if(!operation)
            return res.status(404).json({msg: "Process interrupted"});
        const income = new Income({operation: operation, source});
        await income.save();
        return res.json({operation,income})
    } catch (error) {
        console.log(`Server : ${error}`);
        return res.status(500).json({msg: `Server : ${error}`});
    }
})

// Fetch the last 20 incomes

router.post("/all", async (req, res)=>{
    try {
        const {id} = req.body;
        Operation.aggregate([
            {
                $match: {
                    user: ObjectId(id)
                }
            },
            {
                $lookup:{
                    from: "incomes",
                    localField: "_id",
                    foreignField: "operation",
                    as: "data"
                }
            },
            {
                $unwind : "$data"
            },
        ]).exec(function(err, obj){
            return res.json(obj)
        })
    } catch (error) {
        console.log(`Server : ${error}`);
        return res.status(500).json({msg: `Server : ${error}`});
    }
})

// Fetch a specific income

router.get("/one", async (req, res)=>{
    try {
        const {id} = req.body;
        const income = await Income.findById(id);
        return res.json(income);
    } catch (error) {
        console.log(`Server : ${error}`);
        return res.status(500).json({msg: `Server : ${error}`});
    }
})

module.exports = router; 