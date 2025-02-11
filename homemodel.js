const mongoose = require("mongoose")


const HomeSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    network:{
        type:String
    }

})
const Signupmodel = mongoose.model("HomeSchema",HomeSchema);
module.exports=Signupmodel;