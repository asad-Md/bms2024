import express from "express";
import { configDotenv } from "dotenv";
import { getUrl } from "./utils/getUrl.js";
import { solidData } from "./utils/soiligGrids.js";
import axios from "axios";

configDotenv({path: "./.env"})


const PORT = 8000;
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
        if(data){
            const recommended = await axios.get("http://localhost:3000/cropstogrow/", {
                params: {
                    nitrogen: data.nitrogen,
                    temperature: data.temperature,
                    humidity: data.humidity,
                    ph_value: data.phh2o,
                    rainfall: data.rain,
                },
            });
            console.log(recommended);
            res.json(recommended.data);
        }
    
    }
    gettingsolidData();
})

app.get("./nametourl",async(req,res)=>{
    const li=req.body;
    const data=await getUrl(li);
    res.json(data);
})