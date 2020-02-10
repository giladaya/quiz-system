const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const USERS = require("../data/users");
const { SECRET } = require("../auth");

/* GET users listing. */
router.post("/login", function(req, res, next) {
  const userRecord = USERS.find(user => user.username === req.body.username);
  if (!userRecord) {
    return res
      .status(401)
      .send({ auth: false, message: "Invalid username", token: null });
  }
  if (!req.body.password) {
    return res
      .status(401)
      .send({ auth: false, message: "Password not provided", token: null });
  }
  const passwordIsValid = bcrypt.compareSync(
    req.body.password,
    userRecord.password
  );
  if (!passwordIsValid) {
    return res
      .status(401)
      .send({ auth: false, message: "Wrong password", token: null });
  }

  const { password: _password, ...payload } = userRecord;
  const token = jwt.sign(payload, SECRET, {
    expiresIn: 86400 // expires in 24 hours
  });

  res.send({ auth: true, token });
});

module.exports = router;
