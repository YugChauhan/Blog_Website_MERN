const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send("User is not authanticate");
  }
  jwt.verify(token, process.env.SECRET, async (err, data) => {
    if (err) {
      return res.status(403).send("Token is not vaild")
    }
    req.userId=data.id
    next();
  });
};

module.exports=verifyToken
