const express = require("express");
const router = express.Router();
const Borrowing = require("../../models/borrowing");
const Credit = require("../../models/credit");

// Create a borrowing

router.post("/", async (req, res)=>{  
    try {
        const {amount, currency, name, phone, email, expectedDate, borrower} = req.body;
        const credit = new Credit({amount, name, currency, phone, email, expectedDate});
        console.log(JSON.stringify("kkk"))
        await credit.save();

        if (!credit)
            return res.status(404).json({msg: " Process interrupted"});
        const borrowing = new Borrowing({credit: credit._id, borrower});
        await borrowing.save()
        return res.json({credit, borrowing})
    } catch (error) {
        console.log(`Server : ${error}`);
        return res.status(500).json({msg: `Server : ${error}`});
    }
})

// Fetch the last 20 borrowing

router.post("/all", async (req, res)=>{
    try {
        const {borrower} = req.body;
        console.log("pppskmdks")
        const borrowing = await Borrowing.find({borrower}).populate("credit").limit(20).sort({date: 1});
        return res.json(borrowing);
    } catch (error) {
        console.log(`Server : ${error}`);
        return res.status(500).json({msg: `Server : ${error}`});
    }
})

// Fetch a specific borrowing 

router.get("/one", async (req, res)=>{
    try {
        const {id} = req.body;
        const borrowing = await Borrowing.findById(id);
        return res.json(borrowing);
    } catch (error) {
        console.log(`Server : ${error}`);
        return res.status(500).json({msg: `Server : ${error}`});
    }
})

module.exports = router;