const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require('../db');

// Admin Routes
// Implement admin signup logic
// Description: Creates a new admin account.
//   Input Body: { username: 'admin', password: 'pass' }
//   Output: { message: 'Admin created successfully' }
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const admin = new Admin({ username, password });
    await admin.save();
    res.json({ message: 'Admin created successfully' });
});

// Implement course creation logic
// - POST /admin/courses
//   Description: Creates a new course.
//   Input: Headers: { 'username': 'username', 'password': 'password' }, Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }
//   Output: { message: 'Course created successfully', courseId: "new course id" }
router.post('/courses', adminMiddleware, async (req, res) => {
    const { title, description, price, imageLink } = req.body;
    const course = new Course({ title, description, price, imageLink });
    await course.save();
    res.json({ message: 'Course created successfully', courseId: course._id });
});

// Implement fetching all courses logic
// - GET /admin/courses
//   Description: Returns all the courses.
//   Input: Headers: { 'username': 'username', 'password': 'password' }
//   Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
router.get('/courses', adminMiddleware, async (req, res) => {
    const courses = await Course.find({});
    res.json({
        courses: courses
    });
});

module.exports = router;