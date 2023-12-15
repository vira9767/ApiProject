import express from 'express'
let app = express()
import dotenv from 'dotenv'
dotenv.config()
 import bodyParser from 'body-parser'
 app.use(bodyParser.urlencoded({extended:false}))
import connectDB from './db/connectDB.js'
import userRouter from './routers/userRouter.js'


let port =process.env.PORT 
let url =process.env.URL 
let dbname =process.env.DBNAME

// app.use(express.json())

// db connection
connectDB(url,dbname)

//routes
app.use('/user',userRouter)

//server started
app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`)
})