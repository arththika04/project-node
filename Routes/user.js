

import express from 'express';
const router = express.Router();
router.use(express.json());

const users = [
{ id: 1, name: "Alice" },
{ id: 2, name: "Bob" },
];

//basic route
router.get('/', (req, res) => {
res.send('Welcome to the Express server!');
});

router.post("/user", (req, res) => {
const { name, age } = req.body;
const newUser = { id: users.length+1, name, age};
users.push(newUser);
res.status(201).json(newUser);
})

export default router;