import express from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;

// create an Express app
const app = express();

// middeleware to parse JSON requests
//app.use(express.json());

//start the server
app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});

