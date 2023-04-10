const express = require('express')
const router = express.Router()
var fetchuser = require('../middleware/fetchuser')
const Post = require('../models/Post')
const User = require('../models/User')
const Comment = require('../models/Comment')


// ROUTE 1 : Get All the activities using :GET method Login required


// ROUTE 2: ADD post using :POST ------>Login requirements

router.post("/addpost", fetchuser, async (req, res) => {
    try {
        const newPost = new Post(req.body);
        try {
            const savePost = await newPost.save();
            res.status(200).json(savePost)
        } catch (error) {
            res.status(500).json(error)
        }

    } catch (error) {
        res.status(500).json(error)

    }
})

// ROUTE 3: Update post using :PUT ------>Login requirements

router.put("/:id", fetchuser, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body })
            res.status(200).json("update successfully")

        } else {
            res.status(403).json("you cannot update others post")
        }
    } catch (error) {
        res.status(500).json(error)
    }

})


// ROUTE 4:Delete a post  using :DELETE ------------>Login req

router.delete("/:id", fetchuser, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json("deleted successfully")
        } else {
            res.status(403).json("you can delete only your posts")
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

// ROUTE 5:like and dislike a post  using :Put ------------>Login req

router.put("/:id/like", fetchuser, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (!post.likes.includes(req.body.userId)) {
            await Post.updateOne({ $push: { likes: req.body.userId } })
            res.status(200).json("post liked")
        } else {
            await Post.updateOne({ $pull: { likes: req.body.userId } })
            res.status(200).json("post dislike")
        }
    } catch (error) {
        res.status(500).json(error);
    }
})



// Comment on a post

router.put("/:id/comment", fetchuser, async (req, res) => {
    try {
        currentUser = await User.findById(req.body.userId)
        if (currentUser) {
            const newComment = new Comment({
                userId: req.body.userId,
                comment: req.body.comment
            })
            await newComment.save()
            console.log(newComment);
            await Post.updateOne({ $push: { comment: newComment } })
            res.status(200).json("user found")
        } else {
            res.status(404).json("user not found")
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

// ROUTE 6:get a post  using :Put ------------>Login req

router.get("/:id", fetchuser, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error);
    }
})


// ROUTE 7:get a timeline post  using :Put ------------>Login req



router.get('/timeline/post',fetchuser, async (req, res) => {
    try {
        const currentUser =await User.find(req.params._id)
        if(currentUser){
            const showPost = await Post.find()
            res.json(showPost)
        }else{
            res.status(404).json("please login")
        }

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error")
    }

})



// router.get("/timeline/all", async (req, res) => {
//     try {
        // const currentUser = await User.findById(req.body.userId);
        // const userPosts = await Post.find({ userId: currentUser._id });
        // const friendPosts = await Promise.all(
        //     currentUser.followings.map((friendId) => {
        //         return Post.find({ userId: friendId });
        //     })
        // );
        // res.json(userPosts.concat(...friendPosts))

//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


module.exports = router