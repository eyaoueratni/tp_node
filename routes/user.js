const express=require('express')
const app=express.Router();

app.get('/list',(req,res)=>{
    res.setEncoding('list de users')
});
module.exports=express.Router;
