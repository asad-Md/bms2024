import express from "express";
import { configDotenv } from "dotenv";

import cors from "cors"



configDotenv({path: "./.env"})


const PORT = 3000;
const app = express()

connectDatabase();

app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: "*"}))
// This is required to handle urlencoded data
app.use(express.json()); 

app.get("/test", (req,res) => {
    res.status(200)
    res.json({status: "works"})
})


app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running")
    else 
        console.log("Error occurred, server can't start", error);
    }
);

