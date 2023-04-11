const pool = require("../dbPG");

// consultando todas las tareas
const getAllTasks = async (req, res) => {
  try {
    const allTasks = await pool.query("SELECT * FROM task");
    res.json(allTasks.rows);
  } catch (error) {
    console.log(error.message);
    res.send("error a list of task");
  }
};

//consultando una unica tarea
async function getTask(req, res) {
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
}

// creando tarea
const createTask = async (req, res) => {
  const { title, description } = req.body;

  const result = await pool.query(
    "INSERT INTO task (title, description) VALUES ($1, $2)",
    [title, description]
  );

  console.log(result);
  res.send("Creating a task");
};

//eliminando tarea
const deleteTask = async (req, res) => {
  const { id } = req.params;

  const result = await pool.query("DELETE FROM task WHERE id = $1", [id]);

  if (result.rowCount === 0)
    return res.status(404).json({
      message: "Task not found",
    });
  return res.sendStatus(204);
};

// editando tarea
const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const result = await pool.query(
    "UPDATE task SET title = $1, description = $2 WHERE id = $3",
    [title, description, id]
  );

  res.send("updating a task");
};
module.exports = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};
