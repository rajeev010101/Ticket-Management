import dotenv from "dotenv"
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
const app = express()

connectDB()
.then(() =>{
    app.listen(process.env.PORT || 3000, () =>{
        console.log(` Server is running at port: $ {process.env.PORT }`)
    })
    
    app.on("error", (error) => {
        console.log("Error:", error);
        throw error;
    });
   
})

.catch((err)=>{
    console.log("Mongo db connection failed !!!", err);
})
