import express from "express";
import { configDotenv } from "dotenv";

import { solidData } from "./utils/soiligGrids.js";


configDotenv({path: "./.env"})


const PORT = 3000;
const app = express()



// This is required to handle urlencoded data
app.use(express.json()); 

app.get("/", (req,res) => {
    res.status(200)
    console.log("wow");
    res.json({status: "works"})
})


app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running")
    else 
        console.log("Error occurred, server can't start", error);
    }
);


app.get("/getsoildata",(req,res)=>{
    const { lat, long } = req.body;
    const gettingsolidData=async()=>{
        const data=await solidData({lat,long});
        res.json(data);
    }
    gettingsolidData();
})