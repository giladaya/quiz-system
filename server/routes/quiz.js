const express = require("express");
const router = express.Router();
const QUESTIONS = require("../data/questions");
const LEADERBOARD = require("../data/leaderboard");

function numericSort(a, b) {
  return b - a;
}

function calcScore(answers, questionsDataArr) {
  const score = answers.reduce((acc, answer, idx) => {
    if (
      questionsDataArr.length > idx &&
      parseInt(answer, 10) === questionsDataArr[idx].answer
    ) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return score;
}
/* POST answers */
router.post("/", function(req, res, next) {
  if (!Array.isArray(req.body)) {
    return res
      .status(403)
      .send({ success: false, message: "Expected array of numbers" });
  }
  const score = calcScore(req.body, QUESTIONS);
  const thresholdScore = [...LEADERBOARD]
    .sort(numericSort)
    .reverse()
    .slice(-10)[0].score;
  if (score > thresholdScore) {
    const tempName = `User_${Math.round(Math.random() * 10000000)}`;
    LEADERBOARD.push({
      score,
      name: tempName,
      isTemp: true,
    });
    return res.send({ score, tempName, isTop: true });
  }
  return res.send({ score, tempName: null, isTop: false });
});

module.exports = router;
