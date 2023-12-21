const mongoose = require("mongoose")

const MongoConnect=()=>{
    try{
        mongoose.connect('mongodb://localhost:27017/YugBlogs')
        console.log("Database connected")
    }
    catch(error){
        console.log("Error while connecting database -",error)
    }
    
}
module.exports=MongoConnect;