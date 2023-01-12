import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
Name:{
    type:String,
    required:[true,"Name is required"],
    trim:true
},
Email:{
    type:String,
    required:[true,"Email is required"],
  
    trim:true
},
Password:{
    type:String,
    required:[true,"Password is required"],
    trim:true
},
Phone:{
    type:String,
    required:[true,"PhoneNo is required"],
    trim:true
},
ConfirmPassword:{
    type:String,
    required:[true,"Password is required"],
    trim:true
},
VarificationStatus:{
    type:Boolean,
    default:false
}
})
 
export  default mongoose.model("User",userSchema)