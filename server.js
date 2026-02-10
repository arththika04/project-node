import express from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;

// create an Express app
const app = express();

// middeleware to parse JSON requests
//app.use(express.json());
app.use(express.json());
let users=[
  {id: 1, name: "Pirana"},
  {id: 2, name:  "Arththi"},
];

//basic route
app.get('/', (req, res) => {
res.json(users);
});


app.post("/user", (req,res)=>{
  const { name } = req.body;
  const newUser = {id:useResolvedPath.length + 1,name};
  users .push (newUser);
  res.status (201).json(newUser)
}
);














//start the server
app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});

