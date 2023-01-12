import express from "express";
import { connectdatabase } from "./config/database.js";
import { config } from "dotenv";
import mongoose from "mongoose";
import app from "./app.js"



config({
    path:"./config/config.env"
})
mongoose.set('strictQuery', true);
connectdatabase()
app.listen(process.env.PORT,()=>{
    console.log(`connected on port ${process.env.PORT}`)
})