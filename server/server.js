const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const port = process.env.PORT || 5000; 


//middleware
app.use(cors());
app.use(express.json());

connectDB();

app.get("/home", (req, res) => {
    console.log("Home API");
    res.send("Home API");
})

app.get("/route", (req, res) => {
    console.log("Hello");
    res.send("route");
})

app.post("/getData" , (req,res)=>{
    
})

app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Health API running correctly"
    });
})


app.listen(port, () => {
    console.log(`Server listening in port ${port}`);
})