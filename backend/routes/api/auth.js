const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config  = require("config");

router.post("/sign_in", async (req,res)=>{
    try {
        const {email, password} = req.body;
        console.log(email)
        console.log(password)
        if(!email || !password)
            return res.status(404).json({msg: `Email or password can't be empty`});
    
        const user = await User.findOne({email});
        if (!user)
            return res.status(405).json({msg: `User not found.`});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)
            return res.status(409).json({msg: `Email or password is wrong.`});
        const payload = {
            user: {
                id: user.id, 
                email: user.email,
                firstname: user.firstname,
                lastname: user.lastname,
                country: user.country,
                gender: user.gender
            },
        }
        
        jwt.sign(
            payload,
            config.get("jwtSecret"),{
                expiresIn: 3600000
            }, (err, token) => {
                if(err){
                    return res.status(500).json({
                        msg: `Error, can't create a new token ${err}`
                    })
                }
                console.log(token);
                return res.json(token)
            }
        )
    } catch (error) {
        console.log(`Server : ${error}`);
        return res.status(500).json({msg: `Server : ${error}`})
    }
})

router.post("/", async (req,res) => {
    try{
        let {email, password, firstname, lastname, gender, date, country} = req.body;
        let user = await User.findOne({email});
        if(user)
            return res.json({msg: `This email is already linked to another account.`});

        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        user = new User({email, password, firstname, lastname, country, gender, date});

        await user.save();

        const payload = {
            user: {
                id: user.id, 
                email: user.email,
                firstname: user.firstname,
                lastname: user.lastname,
                country: user.country,
                gender: user.gender
            },
        };
        // Use payload to return the token
        jwt.sign(
            payload,
            config.get("jwtSecret"),{

                expiresIn: 3600000
            }, (err, token) => {
                if(err){
                    return res.status(500).json({
                        msg: `Error, can't create a new token ${err}`
                    })
                }
                return res.json({msg: "You welcome", token})
            }
        )
    } catch (error){
        console.log(`Server : ${error}`);
        return res.status(500).json({msg: `Server : ${error}`})
    }
});

module.exports = router;