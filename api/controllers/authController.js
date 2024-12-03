import bcrypt from 'bcryptjs';
import User from "../models/userModel.js";

// Signup handler
export async function signup(req, res) {
  const { fullName, phone, email, password, role, location } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, message: "Email already registered" });
    }

    const hashedPassword = await hash(password, 10);

    const newUser = new User({
      fullName,
      phone,
      email,
      password: hashedPassword,
      role,
      location: role === "bloodBank" ? location : undefined,
    });

    await newUser.save();

    const token = sign({ userId: newUser._id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "An error occurred during signup" });
  }
}

// Login handler
export async function login(req, res) {
  const { email, password, phone } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    if (user.phone !== phone) {
      return res.status(400).json({ message: 'Incorrect phone number' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    const token = sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    return res.json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}
