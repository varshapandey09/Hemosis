// routes/donations.js
import express from 'express';
import Donation from '../models/Donation.js';

const router = express.Router();

// Create a new donation record
router.post('/', async (req, res) => {
  const { userId, bloodBankId, bloodGroup } = req.body;
  try {
    const newDonation = new Donation({ userId, bloodBankId, bloodGroup });
    await newDonation.save();
    res.status(201).json(newDonation);
  } catch (error) {
    res.status(400).json({ error: 'Error creating donation' });
  }
});

export default router;
