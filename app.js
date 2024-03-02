const express=require('express');
const mongoose=require('mongoose');
const authroutes=require('./routes/auth');
const postroutes=require('./routes/post');
const dotenv=require('dotenv');
dotenv.config()
//create instance of express
const app=express();
app.use(express.json());
app.use('/auth', authroutes);
app.use('/post',postroutes);

const MONGOODB_URL=process.env.MONGOODB_URL
const PORT=process.env.PORT || 9001 ;

mongoose.connect(MONGOODB_URL).then(()=>{
    console.log('Connected to MongoDb')
    app.listen(PORT,()=>{
        console.log(`server is running on port ${PORT}`)
    })
}).catch(err=>{
    console.log('Error connecting to database:',err)
});