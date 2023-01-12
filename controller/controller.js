import user from "../models/model.js"
import bcrypt  from "bcrypt";
import jwt from"jsonwebtoken";


export const  createUser = async(req,res)=>{
 try {
    let data = req.body;
    const {name, email,password,confirmPassword,phone} = data

    // for( let i in data){
    //     if(!i){
    //        return res.status(400).json({status:false,message:`${i} must be given`})
    //     }
    // }
    
    console.log(data)
    let uniquemail = await user.findOne({email})
    // if(uniquemail) return res.status(400).json({status:false,message:`user with this email is already present`})
    
    
    
    if( password != confirmPassword){
        return res.status(400).json({status:false,message:`password is not same`})
    }
   
    // data.password = await bcrypt.hash(data.password,10);
    // data.confirmPassword =data.password;
    
    const finalData = await user.create(data);
    let token = jwt.sign({_id:finalData._id},process.env.JWT_SECRET)
    const options={
        httpOnly:true,
        expires:new Date(Date.now()+ 10*24*60*60*1000)
    }
    // dataNew ={name, email,phone,varificationStatus}
    // console.log(dataNew)
    return res.status(201).cookie("token",token,options).json({status:true,User:finalData,token:token})

 } catch (error) {
   
 }
}

export const login = async(req,res)=>{
    try {
        let data = req.body;
        const {email,password}=data;
         let userLogin = await user.findOne({email}).select("Password");
         if(!userLogin){
             return res.status(400).json({status:false,message:`no such user`})
            }
            
            console.log(password,userLogin.password)
            let checkPassword = await bcrypt.compare(password,userLogin.Password)
            let token = jwt.sign({_id:userLogin._id},process.env.JWT_SECRET)
            const options={
                httpOnly:true,
            expires:new Date(Date.now()+ 10*24*60*60*1000)
        }
        return res.status(200).cookie("token",token,options).json({status:true,message:"login successfully",token})

    } catch (error) {
        if( error){
            return res.status(500).json({status:false,message:error.message})
        }  
    }
}
