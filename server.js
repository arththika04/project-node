import express from 'express';
import dotenv from "dotenv";
import userRoutes from "./routes/users.js"
import mongoose from 'mongoose' 
dotenv.config();

const PORT = process.env.PORT;
// Create an Express app
const app = express();
// Middleware to parse JSON requests
app.use(express.json());
app.use("/api/v1/users", userRoutes);

// mongo db connection 
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB connected"))
.catch(err=> {
  console.error("DB connections Error:",err.message);
  process.exit(1);
}
);
// Start the server
app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});



