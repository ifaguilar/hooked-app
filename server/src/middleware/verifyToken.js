import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token || token === "null") {
    return res.status(401).json({
      ok: false,
      message: "Unauthorized.",
    });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.user = payload.userId;
    next();
  } catch (error) {
    console.error(error.message);
    return res.status(401).json({
      ok: false,
      message: "Unauthorized.",
    });
  }
};
