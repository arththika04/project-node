app.use(express.json());
let users=[
  {id: 1, name: "Pirana",age:22},
  {id: 2, name:  "Arththi",age:21},
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
