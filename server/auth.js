const jwt = require("jsonwebtoken");

const SECRET = "adskfjhiueiuycbjhcb";

function isAdmin(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).send({ auth: false, message: "No token provided." });
  }

  jwt.verify(token, SECRET, function(err, decoded) {
    if (err) {
      console.error(err);
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });
    }

    req.user = decoded;
    return next();
  });
}

module.exports = {
  SECRET,
  isAdmin
};
