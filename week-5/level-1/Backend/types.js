// Zod validation schema for the types used in the backend

const z = require('zod');

const cardSchema = z.object({
    name: z.string(),
    description: z.string(),
    linkedIn: z.string(),
    twitter: z.string(),
    interests: z.array(z.string())
});
// example of a card object
// {
//     name: "John Doe",
//     description: "Software Engineer",
//     linkedIn: "https://www.linkedin.com/in/johndoe",
//     twitter: "https://twitter.com/johndoe",
//     interests: ["Programming", "Reading"]
// }

const userSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6)
});

const updatcardSchema = z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    linkedIn: z.string().optional(),
    twitter: z.string().optional(),
    interests: z.array(z.string()).optional()
});

const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});

module.exports = {
    cardSchema,
    userSchema,
    updatcardSchema,
    signinSchema
};