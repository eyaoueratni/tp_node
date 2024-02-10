const express=require('express')
const app=express.Router();
const array=[
    {id:1,nom:'eya'},
    {id:2,nom:'soumaya'}
]
app.get('/post/all',(req,res)=>{
    res.send(array)});
app.get('/post/:id',(req,res)=>{
    const id=req.params.id;
    const array2 = array.find(array => array.id === parseInt(id));
    res.send(array2);
    

});
module.exports=express.Router;