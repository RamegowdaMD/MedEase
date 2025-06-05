import jwt from 'jsonwebtoken';

const requireAuth = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ success: false, message: "Authorization token required" });
    }

    try {
        const token = authorization.split(' ')[1]; // Bearer <token>
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: "Invalid or expired token" });
    }
};

export default requireAuth;
