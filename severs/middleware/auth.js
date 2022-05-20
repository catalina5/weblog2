const jwt = require("jsonwebtoken");

const secret = "test";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.trim().split(" ")[1];
    const isCustomAuth = token.length < 500;
    let decodedData;
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, secret);
      req.userId = decodedData?.id;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = auth;
