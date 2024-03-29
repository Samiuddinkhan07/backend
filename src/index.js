import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from 'express';

const app  = express();


(async () =>{
    try {
       await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error",(error) =>{
            console.log("The connection could not be established with the database with the error",error)
        });
        app.listen(process.env.PORT,() =>{
            console.log("The connection has been established witht the DB and the server is running on the port 8000",)
        })
    } catch (error) {
        console.log("errr",error)
    }
})()