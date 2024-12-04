import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoute from './routes/authRoute.js'; // Import routes

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit process on failure
  });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Use routes
app.use("/api/auth", authRoute);

// Test Route
app.get("/", (req, res) => {
  res.send("Hemosis Backend is running!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use((err, req, res, next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
      success: false,
      statusCode: statusCode,
      message: message,
  });
});