const { Router } = require("express");
const pool = require("../dbPG");

const router = Router();

router.get('/task', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while querying the database' });
  }
});

router.get("/task/10", (req, res) => {
  res.send("retrieving a single tasks");
});

router.post("/task", (req, res) => {
  res.send("creating a tasks");
});

router.delete("/task", (req, res) => {
  res.send("deleting a tasks");
});

router.put("/task", (req, res) => {
  res.send("updating a tasks");
});

module.exports = router;
