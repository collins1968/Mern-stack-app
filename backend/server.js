const dotenv = require("dotenv").config();
const express = require("express");
//const { default: mongoose } = require("mongoose");
//const connectDb = require("./config/connectDB");
const mongoose = require("mongoose");

const app = express()

//route
app.get("/", (req, res) => {
    res.send("<h1>home page</h1>"); 
});


const PORT = process.env.PORT || 5000

//connect to the datase function
mongoose
.connect(process.env.MONGO_URI)
.then( () => {
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
    }); 
})
.catch((err) => console.log(err)); 

