const express=require('express')
const voitRouter=express.Router();
voitures = [{id:1,name:"clio"},{id:2,name:"megane"},{id:3,name:"range"}]

voitRouter.post('/new',(req,res)=>{

    const newvoit=req.body;
    voitures.push(newvoit);
    res.send('ajout success')
})
voitRouter.get('/all',(req,res)=>{
    res.send(voitures);
})
voitRouter.get('/findbyid/:id',(req,res)=>{
    const voitid=parseInt(req.params.id);
    const voit=voitures.find(voit=>voit.id===voitid);
    if(voit){
        res.send(voit);
    }else {
        res.status(404).send('not found');

    }
})
voitRouter.delete('/delete/:id',(req,res)=>{
    const voitid=parseInt(req.params.id);
    const voitindex=voitures.findIndex(voit=>voit.id===voitid);
   if (voitindex!=-1){
    voitures.splice(voitindex,1)
    res.send({message:'car deleted successfully'})
   }else {
    res.status(404).send('not found')
   }
});

module.exports=voitRouter;