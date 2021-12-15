const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../models/User");

const verifyToken = async (req, res, next) => {
      try {
            const token = req.headers["x-access-token"];
            if (!token) return res.status(403).json({ message: "No token provided" });

            const decoded = jwt.verify(token, config.SECRET);

            const user = await User.findById(decoded.id, { password: 0 });
            if (!user) return res.status(404).json({ message: "User doesn't exist" });

            next();
      } catch (error) {
            console.log(error);
      }
};

module.exports = verifyToken;