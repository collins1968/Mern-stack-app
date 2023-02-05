const express = require("express");
const { createTask, getTasks, getTask } = require("../controllers/taskControllers");
const Task = require("../model/taskModel");
const router = express.Router()

// post the task to the database
router.post("/api/tasks", createTask);

//get the task from the database
router.get("/api/tasks", getTasks );

//get a single task
router.get("/api/tasks/:id", getTask );


module.exports = router