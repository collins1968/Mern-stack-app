const dotenv = require("dotenv").config();
const express = require("express");
//const { default: mongoose } = require("mongoose");
//const connectDb = require("./config/connectDB");
const mongoose = require("mongoose");
const Task = require("./model/taskModel");
const taskRoute = require("./Routes/taskRoute")

const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(taskRoute);

/*
const logger = (req, res, next) => {
    console.log("middleware ran");
    console.log(req.method);
    next();
};
*/
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

