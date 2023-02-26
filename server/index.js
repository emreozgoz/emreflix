import cookieParser from "cookie-parser";
import express from "express";
import http from "http";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const port = process.env.PORT || 5000;
const server = http.createServer(app);

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("MongoDB Connected");
    server.listen(port,()=>{
        console.log(`Server is listening on port ${port}`);
    })
}).catch((err)=>{
    console.log(err);
    process.exit(1);
})
