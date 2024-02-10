const express=require('express');


const auth=require('./routes/auth')
const post=require('./routes/post')
const user=require('./routes/user')
//create instance of express
const app=express();

app.use('/user',user);

app.use('/auth',auth);
app.use('/post',post);
app.listen(5000,()=>{
    console.log('listening on port 5000');
})


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