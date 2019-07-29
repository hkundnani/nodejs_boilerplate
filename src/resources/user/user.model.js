import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    }
  },
  { timestamps: true }
);

export const User = mongoose.model("user", userSchema);
