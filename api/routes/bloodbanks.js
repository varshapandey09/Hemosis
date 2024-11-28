// routes/bloodbanks.js
import express from 'express';
import BloodBank from '../models/BloodBank.js';

const router = express.Router();

// Create a new blood bank
router.post('/', async (req, res) => {
  const { name, address, contact, availableBloodGroups, location } = req.body;
  try {
    const newBloodBank = new BloodBank({ name, address, contact, availableBloodGroups, location });
    await newBloodBank.save();
    res.status(201).json(newBloodBank);
  } catch (error) {
    res.status(400).json({ error: 'Error creating blood bank' });
  }
});

// Search blood banks by location or blood group
router.get('/search', async (req, res) => {
  const { query, bloodGroup } = req.query;
  const searchConditions = {};

  if (query) searchConditions.location = { $regex: query, $options: 'i' }; // Search by location
  if (bloodGroup) searchConditions.availableBloodGroups = bloodGroup; // Search by blood group

  try {
    const bloodBanks = await BloodBank.find(searchConditions);
    res.status(200).json(bloodBanks);
  } catch (error) {
    res.status(400).json({ error: 'Error searching for blood banks' });
  }
});

export default router;
