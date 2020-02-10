var express = require("express");
var router = express.Router();
const QUESTIONS = require("../data/questions");

/* GET all questions */
router.get("/", function(req, res, next) {
  const data = QUESTIONS.map(questionData => ({
    id: questionData.id,
    question: questionData.question,
    answers: questionData.answers,
  }))
  res.send(data);
});

module.exports = router;
