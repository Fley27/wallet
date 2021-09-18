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
        const {id, currency, amount, category} = req.body;
        console.log(amount)
        if (amount > 500)
            console.log("zozo");
        else
            console.log("pig")
        Operation.aggregate([
            {
                $match: {
                    $and: [{user: ObjectId(id)}, {$and: [{ currency: {$in : currency} }, {amount: {$lte: amount}}, {category: {$in: category}}]}]
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
            console.log(JSON.stringify(obj))
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


router.post("/sum-by-currency", async (req, res)=>{
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
            {
                $project: {
                    usd: {
                        $cond:  { if: { $eq: ["$currency", "USD"] }, then: "$amount", else: {$sum: 0} }
                    },
                    dop: {
                        $cond:  { if: { $eq: ["$currency", "DOP"] }, then: "$amount", else: {$sum: 0} }
                    },
                    htg: {
                        $cond:  { if: { $eq: ["$currency", "HTG"] }, then: "$amount", else: {$sum: 0} }
                    }
                }
            },
            {
                $group: {
                    _id: "Incomes",
                    total_usd: {$sum: "$usd"},
                    total_dop: {$sum: "$dop"},
                    total_htg: {$sum: "$htg"}
                }
            }
        ]).exec(function(err, obj){
            console.log(JSON.stringify(obj))
            return res.json(obj)
        })
    } catch (error) {
        console.log(`Server : ${error}`);
        return res.status(500).json({msg: `Server : ${error}`});
    }
})

router.post("/sum-last-six-month", async (req, res)=>{
    try {
        const {id} = req.body;
        date = new Date();
        const day = date.getDate();
        console.log(day)
        date.setDate(date.getDate() - day);
        console.log(date)
        date.setMonth(date.getMonth() - 6);
        console.log(date);
        Operation.aggregate([
            {
                $match: {
                    $and: [{user: ObjectId(id)}, {date: {$gte : date}}]
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
            {
                $project: {
                    month: {
                        $month: "$date" 
                    },
                    usd: {
                        $cond:  { if: { $eq: ["$currency", "USD"] }, then: "$amount", else: {$sum: 0} }
                    },
                    dop: {
                        $cond:  { if: { $eq: ["$currency", "DOP"] }, then: "$amount", else: {$sum: 0} }
                    },
                    htg: {
                        $cond:  { if: { $eq: ["$currency", "HTG"] }, then: "$amount", else: {$sum: 0} }
                    }
                }
            },
            {
                $group: {
                    _id: "$month",
                    total_usd: {$sum: "$usd"},
                    total_dop: {$sum: "$dop"},
                    total_htg: {$sum: "$htg"}
                }
            },
            {
                $sort: {_id: 1}
            }
        ]).exec(function(err, obj){
            const length = obj.length, data = [];
            let pos = 0, count =  0;
            date = new Date();
            let month = date.getMonth() - 5;
            console.log("month: "+date.getMonth())
            if(length != 0){
                if(length >= 1){
                    do{
                        const object = {};
                        if(month == obj[pos]._id){
                            object._id = obj[pos]._id;
                            object.total_usd = obj[pos].total_usd;
                            object.total_dop = obj[pos].total_dop;
                            object.total_htg = obj[pos].total_htg;
                            pos++;
                            month++;
                            count++
                        }else{
                            object._id = month;
                            object.total_usd = 0;
                            object.total_dop = 0;
                            object.total_htg = 0;
                            month++;
                            count++;
                        }
                        data.push(object);
                        console.log(JSON.stringify(object))
                    }while(pos < length)
                }else{
                    for(count; count < 6; count++){
                        const object = {};
                        object._id = month;
                        object.total_usd = 0;
                        object.total_dop = 0;
                        object.total_htg = 0;
                        month++;
                        data.push(object);
                    }
                }
            }
            return res.json(data)
        })
    } catch (error) {
        console.log(`Server : ${error}`);
        return res.status(500).json({msg: `Server : ${error}`});
    }
})

module.exports = router; 