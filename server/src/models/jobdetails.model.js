const mongoose=require("mongoose");

const jobDetailsSchema  = new mongoose.Schema({
    company:{type:String, required : true},
    role:{type:String, required : true},
    salary:{type:Number},
    location:{type:String, required : true},
    description:{type:String}
},
{
versionKey:false,
timeStamps:true,
})

module.exports = mongoose.model("job",jobDetailsSchema);
