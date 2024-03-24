const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. 
    // Check readme for the exact headers to be expected
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header is required' });
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token is required' });
    }

    try {
        const decoded = jwt.verify(token, jwtPassword);
        next();
    } catch (e) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports = adminMiddleware;