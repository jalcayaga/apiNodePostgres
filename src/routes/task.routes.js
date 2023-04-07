const { Router } = require("express");

const router = Router();

router.get("/task", (req, res) => {
  res.send("retrieving a list of tasks");
});

module.exports = router;
