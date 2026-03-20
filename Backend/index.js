import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";

dotenv.config({});
const app = express();

const PORT = process.env.PORT || 5000; //if port not found then go to 5000 port

app.listen(PORT, ()=>{
  connectDB();  // call the connection database
  console.log(`Server is running on PORT ${PORT}`);
})

