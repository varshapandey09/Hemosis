import { Schema, model } from "mongoose";

const userSchema = new Schema({
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
  role: {
    type: String,
    enum: ["user", "bloodBank"],
    default: "user",
  },
  location: {
    type: String,
    required: function () {
      return this.role === "bloodBank"; // Only blood banks need a location
    },
  },
}, { timestamps: true });

export default model("User", userSchema);
