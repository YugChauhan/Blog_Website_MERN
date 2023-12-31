const express = require("express")
const MongoConnect = require('./DBConnect/DBconnection')
const auth = require('./Routes/auth')
const cookieparser =require("cookie-parser")
const userFunc = require('./Routes/user')
const posts = require("./Routes/post")
const comments = require("./Routes/comment")
const app=express();
const cors = require('cors')

app.use(cors({origin:"http://localhost:3000",credential:true}))
//Middleware
app.use(express.json())
app.use(cookieparser())
app.use('/api/auth/',auth)
app.use("/api/user",userFunc)
app.use("/api/post",posts)
app.use("/api/comments",comments)



app.listen(8000,()=>{
    console.log("Server started")
    MongoConnect()
})
