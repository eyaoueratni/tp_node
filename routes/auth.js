const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require('../models/user');
const router = express.Router();


//register 
router.post('/register',async (req,res)=>{
    try {
    
        const {username,password}=req.body;
        const user = new User({username,password});
        await user.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(400).send(error.message)
    }
})
//login
router.post('/login',async (req,res)=>{
    const {username,password}=req.body;
    const user=await User.findOne({username:username});
    if(!user){
        return res.status(404).send('user not found')}    
     else {
        const passvalid= await bcrypt.compare(password ,user.password)
            if (passvalid)
            {res.json("suceess");}
            else{
                res.json("incorect")
            }
        }
        
        })
module.exports=router;