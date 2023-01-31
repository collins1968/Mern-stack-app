const express = require("express");
const { createTask, getTask } = require("../controllers/taskControllers");
const Task = require("../model/taskModel");
const router = express.Router()

// post the task to the database
router.post("/api/tasks", createTask);

//get the task from the database
router.get("/api/tasks", getTask );


module.exports = router