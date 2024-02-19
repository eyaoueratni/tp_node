const express=require('express')
//creation d'instance 
const app=express.Router();// use just Router() not all the method in express

app.get('/login',(req,res)=>{
    res.send("<h1>welcomme to html</h1>");
});
app.get('/register',(req,res)=>{
    res.sendfile(__dirname+'/index.html')
});

module.exports=express.Router;
