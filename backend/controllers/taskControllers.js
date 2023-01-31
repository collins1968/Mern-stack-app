const Task = require("../model/taskModel");

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(200).json(task); 
     } catch (error) {
         res.status(500).json({msg: error.message});     
     }
};

const getTask = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

module.exports = {
    createTask,
    getTask
}