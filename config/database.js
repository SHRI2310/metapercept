import mongoose from "mongoose";

 export const connectdatabase = async (req,res)=>{

    const {connection} = await mongoose.connect(process.env.MONGO_URL)
    console.log(`database is connected to ${connection.host}`)
 }