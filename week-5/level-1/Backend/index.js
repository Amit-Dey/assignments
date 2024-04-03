// Create a backend server using Express.js and MongoDB. The server should have the following routes:
//  GET /cards - Get all cards
//  POST /cards - Create a card
//  PUT /cards/:id - Update a card
//  DELETE /cards/:id - Delete a card
//  POST /signup - Signup a user with email and password
//  POST /signin - Login a user with email and password and return a JWT token


// Importing Required Libraries
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
// Importing Models
const { Card, User } = require('./db');

// Importing Zod Schemas
const { cardSchema, userSchema, updatcardSchema, signinSchema, tokenSchema } = require('./types');


// Creating an Express App
const app = express();

// Middleware to check if the user is authenticated
const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token,'secret');
        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
};


// Middleware
app.use(express.json());
app.use(cors());

// Routes

// Get All Cards
app.get('/cards', async (req, res) => {
    const cards = await Card.find();
    res.json(cards);
});

// Create a Card
app.post('/cards', auth, async (req, res) => {
    // zod validation
    const cardPayload = cardSchema.safeParse(req.body);
    if (!cardPayload.success) {
        return res.status(400).json({ error: 'Invalid Request' });
    }

    const card = new Card(cardPayload.data);
    await card.save();
    res.json(card);

});

// Update a Card
app.put('/cards/:id', auth, async (req, res) => {
    // zod validation
    const cardPayload = updatcardSchema.safeParse(req.body);
    if (!cardPayload.success) {
        return res.status(400).json({ error: 'Invalid Request' });
    }

    const card = await Card.findByIdAndUpdate(req.params.id, cardPayload.data, { new: true });
    res.json(card);

});

// Delete a Card
app.delete('/cards/:id', auth, async (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).json({ error: 'Invalid Request' });
    }
    const card = await Card.findByIdAndDelete(id);
    if (!card) {
        return res.status(404).json({ error: 'Card not found' });
    }
    res.json(card);
});

// Signup a User with Email and Password

app.post('/signup', async (req, res) => {
    // zod validation
    const userPayload = userSchema.safeParse(req.body);
    if (!userPayload.success) {
        return res.status(400).json({ error: 'Invalid Request' });
    }
    // find if user already exists
    const oldUser = await User.findOne({ email: userPayload.data.email });
    if (oldUser) {
        return res.status(400).json({ error: 'User already exists' });
    }
    const user = new User(userPayload.data);
    await user.save();
    res.json(user);
});

// Login a User with Email and Password and return a JWT Token
app.post('/signin', async (req, res) => {
    // zod validation
    const signinPayload = signinSchema.safeParse(req.body);

    if (!signinPayload.success) {
        return res.status(400).json({ error: 'Invalid Request' });
    }
    try {
        const user = await User.findOne({ email: signinPayload.data.email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid Credentials' });
        }
        if (user.password !== signinPayload.data.password) {
            return res.status(400).json({ error: 'Invalid Credentials' });
        }
        const token = jwt.sign({ id: user._id }, 'secret');
        res.json({ token });
    } catch (error) {
        return res.status(400).json({ error: 'Invalid Credentials' });
    }
});

// Error Handler
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
});

// Starting the Server
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

