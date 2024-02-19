const express=require('express');

const auth=require('./routes/auth')
const postroute = require('./routes/post');

//create instance of express
const app=express();

app.use('/auth',auth);
app.use('/post',postroute);

//app.use('/post',post);
app.listen(9000,()=>{
    console.log('listening on port 9000');
})
//*body of header encoded

/*app.get('/',(req,res)=>{
    res.send('welcome back')})

    
app.get('/template',(req,res)=>{ 
res.sendFile(__dirname+'/index.html')
})
//localhost:9000/node/?name=glsi&?firstname=node
app.get('/node',(req,res)=>{
   console.log("test 1",req.query.name)
   console.log("test 2",req.query.firstname)
})
app.get('/tic/:name/',(req,res)=>{
    console.log("test 1",req.params.name)
    console.log("test 2",req.params.firstname)
 })

app.get('/middle',(req,res,next)=>{
    console.log('request number 1')
    next()
},
(req,res,next)=>{ res.send('request number2 ')})
app.get('/exemple_1',(req,res)=>{
    //res.redirect("/template")
     //res.end('gooooooooooooood bye')
     //res.status(200).send('alllllllllllll good')
     //res.render('index') $ne comprend type html doit le convertir
})
app.listen(5000,()=>{
    console.log('listening on port 5000');
})
*/