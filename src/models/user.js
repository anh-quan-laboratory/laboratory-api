const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserRole = {
  CUSTOMER: "CUSTOMER",
  DOCTOR: "DOCTOR",
};

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: Object.values(UserRole),
    default: UserRole.CUSTOMER,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
  UserRole,
};
