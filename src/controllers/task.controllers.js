const pool = require("../dbPG");

const getAllTasks = async (req, res) => {
  res.send("Retrieven a list of task");
};

const getTask = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query("SELECT * FROM task WHERE id = $1", [id]);

    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Task not found",
      });

    res.json(result.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
};

const createTask = async (req, res) => {
  const { title, description } = req.body;

  const result = await pool.query(
    "INSERT INTO task (title, description) VALUES ($1, $2)",
    [title, description]
  );

  console.log(result);
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
  updateTask,
};
