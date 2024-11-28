// models/Donation.js
import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  bloodBankId: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodBank' },
  bloodGroup: String,
  donationDate: { type: Date, default: Date.now },
});

const Donation = mongoose.model('Donation', donationSchema);

export default Donation;
