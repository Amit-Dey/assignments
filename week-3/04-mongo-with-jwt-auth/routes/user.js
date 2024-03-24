const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require('jsonwebtoken');
const zod = require('zod');
const { User, Course } = require('../db');
const jwtPassword = 'secret';
// User Routes


// - POST /users/signup
//   Description: Creates a new user account.
//   Input: { username: 'user', password: 'pass' }
//   Output: { message: 'User created successfully' }
router.post('/signup', async (req, res) => {
    const { username, password } = req.body
    const userObj = {
        username: username,
        password: password
    };
    const schema = zod.object({
        username: zod.string().email(),
        password: zod.string().min(6)
    });

    try {
        const userData = schema.safeParse(userObj);
        if (!userData.success) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const user = new User({ username, password })
        await user.save()
        res.json({ message: 'User created successfully' })
    } catch (error) {
        // console.log(error);
        return res.status(400).json({ message: 'Invalid credentials' });
    }
});


// - POST /users/signin
//   Description: Logs in a user account.
//   Input: { username: 'user', password: 'pass' }
//   Output: { token: 'your-token' }
router.post('/signin', async (req, res) => {
    const { username, password } = req.body
    const userObj = {
        username: username,
        password: password
    };
    const schema = zod.object({
        username: zod.string().email(),
        password: zod.string().min(6)
    });

    try {
        const userData = schema.safeParse(userObj);
        if (!userData.success) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const user = await User.findOne({ username: username, password: password });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ username: user.username }, jwtPassword);
        res.json({ token: token });
    } catch (error) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }
});



// - GET /users/courses
//   Description: Lists all the courses.
//   Input: Headers: { 'Authorization': 'Bearer <your-token>' }
//   Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
router.get('/courses', (req, res) => {
    const courses = Course.find({})
        .then((courses) => {
            res.json({ courses: courses });
        })
        .catch((error) => {
            res.status(500).json({ message: 'Internal server error' });
        });
});


// - POST /users/courses/:courseId
//   Description: Purchases a course. courseId in the URL path should be replaced with the ID of the course to be purchased.
//   Input: Headers: { 'Authorization': 'Bearer <your-token>' }
//   Output: { message: 'Course purchased successfully' }
router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const Authorization = req.headers['authorization'];
    const token = Authorization.split(' ')[1];
    const user = jwt.verify(token, jwtPassword);
    const username = user.username;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })

    res.json({ message: 'Course purchased successfully' });

});


// - GET /users/purchasedCourses
//   Description: Lists all the courses purchased by the user.
//   Input: Headers: { 'Authorization': 'Bearer <your-token>' }
//   Output: { purchasedCourses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const Authorization = req.headers['authorization'];
    const token = Authorization.split(' ')[1];
    try {
        const user = jwt.verify(token, jwtPassword);
        const userData = await User.findOne({ username: user.username });
        const purchasedCourses = await Course.find({ _id: { $in: userData.purchasedCourses } });
        res.json({ purchasedCourses: purchasedCourses });
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
});

module.exports = router