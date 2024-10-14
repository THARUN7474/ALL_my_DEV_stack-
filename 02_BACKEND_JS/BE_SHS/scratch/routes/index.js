const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const error = []; // Or fetch/set the error dynamically based on your logic
  res.render("index", { error });
});

module.exports = router;
