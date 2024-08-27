const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "Please add a first name"],
    },
    last_name: {
      type: String,
      required: [true, "Please add a last name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    dateofbirth: {
      type: Date,
      required: [true, "Please add the date of birth"],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    points: { type: Number, default: 0 },
    rank: { type: String, default: 'Beginner' },
    badges: { type: [String], default: [] },
    profilePicture: { type: String } 
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
