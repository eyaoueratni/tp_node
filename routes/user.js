const express=require('express')
const app=express.Router();
/*
router.post('/create',(req,res)=>{
console.log(req.body)});*/
app.get('/list',(req,res)=>{
    res.setEncoding('list de users')
});
module.exports=express.Router;
