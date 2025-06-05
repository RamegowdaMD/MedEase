// backend/middleware/requireAuth.js

import jwt from "jsonwebtoken";

export const requireAuth = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: "Authorization required" });

    try {
        const token = authorization.split(" ")[1]; // Assuming "Bearer token"
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
};
