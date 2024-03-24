const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require('jsonwebtoken');
const zod = require('zod');
const { Admin, Course } = require('../db');
const jwtPassword = 'secret';

// Admin Routes

// - POST /admin/signup
//   Description: Creates a new admin account.
//   Input Body: { username: 'admin', password: 'pass' }
//   Output: { message: 'Admin created successfully' }
router.post('/signup', async (req, res) => {
    const { username, password } = req.body
    const user = {
        username: username,
        password: password
    };
    const schema = zod.object({
        username: zod.string().email(),
        password: zod.string().min(6)
    });

    try {
        const userData = schema.safeParse(user);
        if (!userData.success) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const admin = new Admin({ username, password })
        await admin.save()
        res.json({ message: 'Admin created successfully' })
    } catch (error) {
        // console.log(error);
        return res.status(400).json({ message: 'Invalid credentials' });
    }
});


// - POST /admin/signin
//   Description: Logs in an admin account.
//   Input Body: { username: 'admin', password: 'pass' }
//   Output: { token: 'your-token' }
router.post('/signin', (req, res) => {
    const { username, password } = req.body
    const user = {
        username: username,
        password: password
    };
    const schema = zod.object({
        username: zod.string().email(),
        password: zod.string().min(6)
    });

    try {
        const userData = schema.safeParse(user);
        if (!userData.success) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const admin = Admin.findOne({ username, password })
            .then((admin) => {
                if (admin) {
                    const token = jwt.sign({
                        username: admin.username
                    }, jwtPassword)
                    res.json({ token: token })
                }
                else {
                    res.status(401).json({ message: 'Invalid credentials' })
                }
            })
    } catch (error) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

});


// - POST /admin/courses
// Description: Creates a new course.
// Input: Headers: { 'Authorization': 'Bearer <your-token>' }, Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }
// Output: { message: 'Course created successfully', courseId: "new course id" }
router.post('/courses', adminMiddleware, async (req, res) => {
    const { title, description, price, imageLink } = req.body
    const course = {
        title: title,
        description: description,
        price: price,
        imageLink: imageLink
    };
    const schema = zod.object({
        title: zod.string(),
        description: zod.string(),
        price: zod.number(),
        imageLink: zod.string().url()
    });

    try {
        const courseData = schema.safeParse(course);
        if (!courseData.success) {
            return res.status(400).json({ message: 'Invalid course data' });
        }
        // Implement creating a new course logic
        const courses = new Course({ title, description, price, imageLink })
        await courses.save()
        res.json({ message: 'Course created successfully', courseId: courses._id })

    } catch (error) {
        // console.log(error);
        return res.status(400).json({ message: 'Invalid course data' });
    }

});


// - GET /admin/courses
//   Description: Returns all the courses.
//   Input: Headers: { 'Authorization': 'Bearer <your-token>' }
//   Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
router.get('/courses', adminMiddleware, (req, res) => {
    const courses = Course.find()
        .then((courses) => {
            res.json({ courses: courses })
        })
        .catch((error) => {
            res.status(400).json({ message: 'Invalid credentials' });
        })
});

module.exports = router;