const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
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
      match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "is invalid Email"],
    },
    password: {
      type: String,
      default: "123",
    },
    userType: {
      type: String,
      required: true,
      enum: ["admin", "techlead", "user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
