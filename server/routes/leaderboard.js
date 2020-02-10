const express = require("express");
const router = express.Router();
const LEADERBOARD = require("../data/leaderboard");

function numericSort(a, b) {
  return b - a;
}

router.get("/", function(req, res, next) {
  const data = LEADERBOARD.map(entry => ({
    name: entry.name,
    score: entry.score
  }))
    .sort(numericSort);
  return res.send(data.slice(0, 10));
});

router.post("/name/:tempName", function(req, res, next) {
  const { tempName } = req.params;
  const record = LEADERBOARD.find(
    entry => entry.name === tempName && entry.isTemp
  );
  if (!record) {
    return res
      .status(404)
      .send({ success: false, message: "Record not found" });
  }
  record.name = req.body.name;
  record.isTemp = false;

  return res.send(record);
});

module.exports = router;
