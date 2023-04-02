const express = require('express')
const router = express.Router()
var fetchuser = require('../middleware/fetchuser')
const Post = require('../models/Post')



// ROUTE 1 : Get All the activities using :GET method Login required
router.get('/activity',fetchuser ,async (req,res)=>{
    const posts = await Post.find({user:req.user.id})
    res.json(posts)

}) 

// ROUTE 2: ADD activities using :POST 

router.post("/post",fetchuser, async (req, res)=>{
    const posts = await Post.find({user:req.user.id})
    res.json(posts)
})


module.exports = router