const express=require('express')
const postroute=express.Router();
const array=[
    {id:1,nom:'eya'},
    {id:2,nom:'soumaya'}
]
postroute.get('/all',(req,res)=>{
    res.send(array)});
postroute.get('/:id',(req,res)=>{
    const id=req.params.id;
    const array2 = array.find(array => array.id === parseInt(id));
    res.send(array2);
    

});
module.exports=postroute;