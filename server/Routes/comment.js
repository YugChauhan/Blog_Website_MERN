const express = require("express");
const router = express.Router();
const comment = require("../Models/comment");
const verifyToken= require("../verifyToken")

//Create
router.post("/create",verifyToken,async(req,res)=>{
    try{
    const NewPost = new comment(req.body)
    const savedcomment=await Newcomment.save()
    res.status(201).send(savedcomment)
    }
    catch(err){
        res.status.json(err)
    }
})


//Update
router.put("/:id",verifyToken, async (req, res) => {
  try {
    const updatedcomment=await comment.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.status(200).json(updatedcomment);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Delete
router.delete("/:id",verifyToken, async (req, res) => {
  try {
    await comment.findByIdAndDelete(req.params.id);
    res.status(200).json("comment have been deleted")
  } catch (err) {
    res.status(500).send(err)
  }
});
;

//Get Post comment
router.get("/post/:postId", async (req, res) => {
    try {
      const comment= await comment.find({postId:req.params.id});
      res.status(200).json(comment)
    } catch (err) {
      res.status(500).send(err)
    }
  });

module.exports = router;
