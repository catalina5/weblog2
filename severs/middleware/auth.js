const jwt = require("jsonwebtoken");
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;
    let decodeData;
    if (token && isCustomAuth) {
      decodeData = jwt.verify(token, "test");
      req.userId = decodeData?.id;
    } else {
      decodeData = jwt.decode(token);
      req.userId = decodeData?.sub;
    }
    next();
  } catch (err) {
    console.log(err);
  }
};
// const secret = "test";

// const auth = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization.trim().split(" ")[1];
//     const isCustomAuth = token.length < 500;
//     let decodedData;
//     if (token && isCustomAuth) {
//       decodedData = jwt.verify(token, secret);
//       req.userId = decodedData?.id;
//     }
//     next();
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = auth;
