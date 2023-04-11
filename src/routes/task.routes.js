const { Router } = require("express");

const {} = require("../controllers/task.controllers");
const {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/task.controllers");

const router = Router();

router.get("/tasks", getAllTasks);

router.get("/task/10", getTask);

router.post("/tasks", createTask);

router.delete("/task", deleteTask);

router.put("/task", updateTask);

module.exports = router;
