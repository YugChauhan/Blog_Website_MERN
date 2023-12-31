const express = require("express");
const router = express.Router();
const post = require("../Models/post");
const verifyToken= require("../verifyToken")
//Create
router.post("/create",verifyToken,async(req,res)=>{
    try{
    const NewPost = new post(req.body)
    const savedPost=await NewPost.save()
    res.status(201).send(savedPost)
    }
    catch(err){
        res.status.json(err)
    }
})


//Update
router.put("/:id",verifyToken, async (req, res) => {
  try {
    const updatedPost=await post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Delete
router.delete("/:id",verifyToken, async (req,res) => {
  try {
    await post.findByIdAndDelete(req.params.id);
    res.status(200).json("Post have been deleted")
  } catch (err) {
    res.status(500).send(err)
  }
});

//Get Post
router.get("/", async (req, res) => {
  const query =req.query
  try {
    const serachResult = {
      title:{$regex:query.search,$option:"i"}
    }
    const Post= await post.find(query.search?searchFilter:null)
    res.status(200).json(Post)
  } catch (err) {
    res.status(500).send(err)
  }
});

//Get User Post
router.get("/user/:userId", async (req, res) => {
    try {
      const Post= await post.find({userId:req.params.id});
      res.status(200).json(Post)
    } catch (err) {
      res.status(500).send(err)
    }
  });

//Get 


module.exports = router;

