import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const blacklistedTokens = new Set();

/*
Since JWTs cannot be invalidated until they expire, we can store revoked tokens in a database or memory (e.g., Redis) and check against them.

So for now we can store revoked Tokens in memory (Simple)
*/

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    if (blacklistedTokens.has(token)) {
        return res.status(403).json({ message: "Token has been revoked." });
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user; // Attach user payload to request
        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid token." });
    }
};

export const logout = (req, res) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token) {
        blacklistedTokens.add(token);
    }

    res.json({ message: "Logged out successfully." });
};

export { authenticateToken };
