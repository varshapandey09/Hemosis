import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// Sign Up Endpoint
router.post("/signup", async (req, res) => {
  const { name, email, password, role } = req.body;

  // Validate request body
  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
});

// Sign In Endpoint
router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
  
    // Validate request body
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }
  
    try {
      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials." });
      }
  
      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid credentials." });
      }
  
      // Generate JWT token
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
  
      res.status(200).json({
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        token,
      });
    } catch (error) {
      res.status(500).json({ message: "Server error." });
    }
  });
  

export default router;
