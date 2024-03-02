const mongoose=require('mongoose');
const express=require('express');



const postSchema=new mongoose.Schema({
    id:{type:mongoose.Schema.Types.ObjectId ,unique:true},
    contenu:String 
});

const Post=mongoose.model('Post',postSchema)
module.exports=Post