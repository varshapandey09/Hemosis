// models/BloodBank.js
import mongoose from 'mongoose';

const bloodBankSchema = new mongoose.Schema({
  name: String,
  address: String,
  contact: String,
  availableBloodGroups: [String],
  location: String,
});

const BloodBank = mongoose.model('BloodBank', bloodBankSchema);

export default BloodBank;
