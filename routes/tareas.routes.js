const express = require("express");
const routes = express.Router();
const { newLocalTask, localTasks, updateLocalTaskById,} = require("../controllers/local.tasks.controller");
const { tasks, taskById, newTask, updateTaskById, deleteTask } = require("../controllers/tasks.controller");


routes.get("/local-tasks", localTasks);

routes.post("/new-local-task", newLocalTask);

routes.put("/update-local-task/:id", updateLocalTaskById);

//-----------------------------------------//

routes.get("/tasks", tasks);

routes.get("/tasks/:id", taskById);

routes.post("/new-task", newTask, );

routes.put("/update-task/:id", updateTaskById);

routes.delete("/delete-task/:id", deleteTask);

module.exports = routes;