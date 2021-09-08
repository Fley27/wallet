const express = require("express");
const router = express.Router();
const Loan = require("../../models/loan");
const Credit = require("../../models/credit");

// Create a loan

router.post("/", async (req, res)=>{
    try {
        const {amount, currency, status, phone, email, expectedDate, dueDate, lender} = req.body;

        const credit = new Credit({amount, currency, status, phone, email, expectedDate, dueDate});
        await credit.save();

        if (!credit)
            return res.status(404).json({msg: " Process interrupted"});

        const loan = new Loan({credit: credit._id, lender});
        await loan.save()
        
        return res.json({credit, loan})
    } catch (error) {
        console.log(`Server : ${error}`);
        return res.status(500).json({msg: `Server : ${error}`});
    }
})

// Fetch the last 20 loans

router.get("/", async (req, res)=>{
    try {
        const loan = await Loan.find().populate("credit").limit(20).sort({date: 1});
        return res.json(loan);
    } catch (error) {
        console.log(`Server : ${error}`);
        return res.status(500).json({msg: `Server : ${error}`});
    }
})

// Fetch a specific loan 

router.get("/one", async (req, res)=>{
    try {
        const {id} = req.body;
        const loan = await Loan.findById(id);
        return res.json(loan);
    } catch (error) {
        console.log(`Server : ${error}`);
        return res.status(500).json({msg: `Server : ${error}`});
    }
})

module.exports = router;