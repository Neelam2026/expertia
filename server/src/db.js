const mongoose=require("mongoose");
require("dotenv").config();
module.exports=()=>{
   return mongoose.connect(`mongodb+srv://Neelam0101:${process.env.PASSWORD}@cluster0.yca2t.mongodb.net/expertia`)
};
