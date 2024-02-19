const express=require('express')
//creation d'instance 
const auth=express.Router();// use just Router() not all the method in express

auth.get('/login',(req,res)=>{
    res.send("<h1>welcomme to html</h1>");
});
auth.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
});

module.exports=auth;
