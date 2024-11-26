// Models are defined here

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('your mongodb uri');

// card schema
const cardSchema = new mongoose.Schema({
    name: String,
    description: String,
    linkedIn: String,
    twitter: String,
    interests: [String]
});

// user schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const Card = mongoose.model('Card', cardSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
    Card,
    User
};