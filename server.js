import express from 'express';
import dotenv from "dotenv";
import userRoutes from "./routes/users.js"
dotenv.config();
const PORT = process.env.PORT;
// Create an Express app
const app = express();
// Middleware to parse JSON requests
app.use(express.json());
app.use("/api/v1/users", userRoutes);

// Start the server
app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});