var express = require("express");
var router = express.Router();
const QUESTIONS = require("../data/questions");
const { isAdmin } = require("../auth");

/* GET all questions */
router.get("/", function(req, res, next) {
  const data = QUESTIONS.map(questionData => ({
    id: questionData.id,
    question: questionData.question,
    answers: questionData.answers,
  }))
  res.send(data);
});

/* GET all questions in raw */
router.get("/raw/", isAdmin, function(req, res, next) {
  res.send(QUESTIONS);
});

/* GET one question */
router.get("/:id", function(req, res, next) {
  const id = parseInt(req.params.id, 10);
  const question = QUESTIONS.find(q => q.id === id);
  if (!question) {
    return res.status(404).send({ error: true, message: `Question not found` });
  }
  res.send(question);
});

/* CREATE a question */
router.post("/", isAdmin, function(req, res, next) {
  // TODO: validate body
  const id = QUESTIONS.length + 1;
  const question = { ...req.body, id };
  QUESTIONS.push(question);
  res.send(question);
});

/* UPDATE a question */
router.put("/:id", isAdmin, function(req, res, next) {
  const id = parseInt(req.params.id, 10);
  const questionIdx = QUESTIONS.findIndex(q => q.id === id);
  
  if (!questionIdx) {
    return res.status(404).send({ error: true, message: `Question not found` });
  }
  
  // TODO: validate body
  QUESTIONS[questionIdx] = req.body;

  res.send(QUESTIONS[questionIdx]);
});

/* DELETE a question */
router.delete("/:id", isAdmin, function(req, res, next) {
  const id = parseInt(req.params.id, 10);
  const questionIdx = QUESTIONS.findIndex(q => q.id === id);
  
  if (!questionIdx) {
    return res.status(404).send({ error: true, message: `Question not found` });
  }

  QUESTIONS.splice(questionIdx, 1);

  res.status(204).send();
});

module.exports = router;
