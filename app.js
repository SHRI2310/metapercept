import express, { application }  from "express";
import route from "./routes/route.js";
import cookieParser from "cookie-parser";
const app= express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(cookieParser())
app.use("/",route)
export default app