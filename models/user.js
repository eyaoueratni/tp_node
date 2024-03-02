//create model of user
const mongoose=require('mongoose');
const express=require('express');
const bcrypt=require("bcryptjs");


const userSchema=new mongoose.Schema({
    username:{type:String,unique:true},
    password:String 
});
//cryptage de pass avant 
userSchema.pre('save',async function(next){
    const user=this;
    if (user.isModified('password')){
        user.password=await bcrypt.hash(user.password,10)
    }
})
const User=mongoose.model('User',userSchema)
module.exports=User



