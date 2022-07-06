const express=require("express")
const app=express()
const  connect = require("../src/db")
const cors=require("cors")
app.use(cors())
app.use(express.json())
require("dotenv").config();

const userController=require("./controllers/users.controller")
const {Register,Login}=require("./controllers/authController")
const JobController=require("./controllers/jobDetails.controller")

app.use("/users" ,userController)
app.use("/",JobController)
app.post("/register",Register)
app.post("/login",Login)


const port=process.env.PORT||7090
app.listen(port,async()=>{
    try{
      await connect()
      console.log(`listening on port ${port}`)
    }
    catch(error){
        console.log(error)
    }

} )