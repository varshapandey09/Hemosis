import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  role: {
    type: String,
    required: true,
    enum: ['user', 'bloodBank'], // Restrict values to 'user' or 'bloodBank'
  },
  fullName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: function () {
      return this.role === 'bloodBank'; // Only required for blood banks
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
