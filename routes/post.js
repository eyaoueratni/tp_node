const express=require('express');
const post=require('../models/post');
const router=express.Router();

router.get('',async(req,res)=>{
    const posts=await post.find();
    res.json(posts);
}
)
router.get('/:id',async(req,res)=>{
    const { content }=req.body;

})
router.post('/add', async (req, res) => {
    const {  content } = req.body;
    const newPost = new post({  content });
    await newPost.save();
    res.status(201).send('post added success');
    
});
router.put('/update/:id', async (req, res) => {
    const { content} = req.body;
    await post.findByIdAndUpdate(req.params.id, { content }, { new: true });
    res.status(201).send('post updated success');
});    

router.delete('/:id', async (req, res) => {
        await post.findByIdAndDelete(req.params.id);
        res.status(201).send('post deleted success');
});



module.exports=router;