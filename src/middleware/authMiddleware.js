const jwt = require("jsonwebtoken");

exports.protect = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Not authorized, no token",
    });
  }

  try {
    const decoded = jwt.verify(token, "supersecretkey");
    req.user = decoded; // attach user to request
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};
