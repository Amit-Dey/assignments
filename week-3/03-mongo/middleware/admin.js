// Middleware for handling auth
const { Admin } = require('../db');
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. 
    // Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    const admin = Admin.findOne({ username: username, password: password });
    admin.then((admin) => {
        if (!admin) {
            res.status(401).json({ message: 'Unauthorized' });
        } else {
            next();
        }
    });
}
module.exports = adminMiddleware;