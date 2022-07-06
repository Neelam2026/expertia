require("dotenv").config();
const jwt = require("jsonwebtoken")

function  verifyToken(token){
    return new Promise((resolve,reject) => {
        jwt.verify(token, process.env.KEY, (err,decoded) => {
             if(err){
                return reject(err)
             }
            
             return resolve(decoded)
        });
    })
}

const authenticate=async(req,res,next)=>{
  
    if(!req.headers.authorization ||!req.headers.authorization.startsWith("Bearer "))
    return res.status(400).send({message : "Authorization token not found or incorrect"})

    const token = req.headers.authorization.trim().split(" ")[1]
    let decodedUser;
    try{
     decodedUser=await verifyToken(token)
      console.log(decodedUser)
      req.userId = decodedUser.user._id;
      return next();

    }
    catch(e){
     
     return res.status(400).send({message :e.message,message : "Authorization token not found or incorrect"})   
    }
   
    
}

module.exports = authenticate;