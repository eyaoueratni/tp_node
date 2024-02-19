const express=require('express');
const voitRouter=require('./routes/voitures')
//create instance of express
const app=express();
//create a middleware for parsing the content of body
app.use(express.json());
app.use('/voitures',voitRouter);
app.listen(9000,()=>{
    console.log('listening on port 9000');
})
/*app.use((req,res,next)=>{
    res.setHeader('Acess-control-allow-origin','*');
    res.setHeader('Acess-control-allow-origin','GET,POST');

})*/
