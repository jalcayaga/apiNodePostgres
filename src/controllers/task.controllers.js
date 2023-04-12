
const pool = require('../dbPG');

// Retrieving all tasks
const getAllTasks = async (req, res, next) => {
  try {
    const allTasks = await pool.query('SELECT * FROM task');
    res.status(200).json(allTasks.rows);
} catch (error) {
    console.error(error.message);
    next(error);
  }
};

// Retrieving a single task
const getTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await pool.query('SELECT * FROM task WHERE id = $1', [id]);

    if (result.rows.length === 0)
      return res.status(404).json({
        message: 'Task not found',
      });

    res.status(200).json(result.rows[0]);
} catch (error) {
    console.error(error.message);
    next(error);
  }
};

// Creating a task
const createTask = async (req, res, next) => {
  const { title, description } = req.body;

  try {
    const result = await pool.query('INSERT INTO task (title, description) VALUES ($1, $2) RETURING *', [
      title,
      description,
    ]);

    res.status(201).json(result.rows[0]);
} catch (error) {
    console.error(error.message);
    next(error);
  }
};

// Updating a task
const updateTask = async (req, res, next) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    await pool.query('UPDATE task SET title = $1, description = $2 WHERE id = $3', [
      title,
      description,
      id,
    ]);

    res.status(200).json({ message: 'Task updated successfully' });
} catch (error) {
    console.error(error.message);
    next(error);
  }
};

// Deleting a task
const deleteTask = async (req, res, next) => {
  const { id } = req.params;

  try {
    await pool.query('DELETE FROM task WHERE id = $1', [id]);

    res.status(200).json({ message: 'Task deleted successfully' });
} catch (error) {
    console.error(error.message);
    next(error);
  }
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
