const express = require('express')
const router = express.Router()
var fetchuser = require('../middleware/fetchuser')
const Post = require('../models/Post')



// ROUTE 1 : Get All the activities using :GET method Login required
router.get('/activity',fetchuser ,async (req,res)=>{
    const posts = await Post.find({user:req.user.id})
    res.json(posts)

}) 

// ROUTE 2: ADD activities using :POST ------>Login requirements

router.post("/addpost",fetchuser, async (req, res)=>{
    // If there is any kind of error
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    res.json(posts)
})


module.exports = router