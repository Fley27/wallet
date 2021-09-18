const express = require("express");
const router = express.Router();
const Notification = require("../../models/notification"); 

// Create a notification

router.post("/", async (req, res)=>{
    try {
        const {id, alert, title} = req.body;
        const notification = new Notification({id, alert, title});
        await notification.save();
        return res.json(notification);
    } catch (error) {
        console.log(`Server : ${error}`);
        return res.status(500).json({msg: `Server : ${error}`});
    }
})

// Fetch the last 100 notifications

router.get("/", async (req, res)=>{
    try {
        const notifications = await Notification().limit(100).sort({date: 1});
        return res.json(notifications);
    } catch (error) {
        console.log(`Server : ${error}`);
        return res.status(500).json({msg: `Server : ${error}`});
    }
})

// Fetch a specific notification

router.get("/one", async (req, res)=>{
    try {
        const {id} = req.body;
        const notification = await Notification.findById(id);
        return res.json(notification);
    } catch (error) {
        console.log(`Server : ${error}`);
        return res.status(500).json({msg: `Server : ${error}`});
    }
})

module.exports = router; 