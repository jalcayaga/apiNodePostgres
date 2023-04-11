const getAllTasks = async (req, res) => {
  res.send("Retrieven a list of task");
};

const getTask = (req, res) => {
  res.send("Retrieven a single task");
};

const createTask = (req, res) => {
  res.send("Creating a task");
};

const deleteTask = (req, res) => {
  res.send("Deleting a task");
};

const updateTask = (req, res) => {
  res.send("updating a task");
};
module.exports = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask
};
