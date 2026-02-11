import express from 'express';

const router = express.Router();

let users = [
{ id : 1, name: "Thuva", age:22 },
{ id : 2, name: "Kapi", age:20 },
];

// Basic route
router.get('/', (req, res) => {
res.json(users);
});



router.post("/", (req, res) => {
const {name,age} = req.body;
const newUser = { id: users.length + 1, name, age};
users.push(newUser);
res.status(201).json(newUser);
});

export default router;