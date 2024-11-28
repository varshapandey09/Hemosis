// server.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.js";

import userRoutes from './routes/users.js';
import bloodBankRoutes from './routes/bloodbanks.js';
import donationRoutes from './routes/donations.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Define routes
app.use('/api/users', userRoutes);
app.use('/api/bloodbanks', bloodBankRoutes);
app.use('/api/donations', donationRoutes);
app.use("/api/auth", authRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
