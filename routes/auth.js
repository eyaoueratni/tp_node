const express=require('express')
const app=express.Router();

app.get('/login',(req,res)=>{
    res.send("<h1>welcomme to html</h1>");
});
app.get('/register',(req,res)=>{
    res.sendfile(__dirname+'/index.html')
});
module.exports=express.Router;
