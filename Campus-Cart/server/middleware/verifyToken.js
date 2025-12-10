const jwt = require("jsonwebtoken");
const { ErrorHandler } = require("../helpers/error");
const JWT_SECRET = 'course-cart-fallback-secret-for-testing-12345';

const verifyToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    throw new ErrorHandler(401, "Token missing");
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    throw new ErrorHandler(401, error.message || "Invalid Token");
  }
};

module.exports = verifyToken;
