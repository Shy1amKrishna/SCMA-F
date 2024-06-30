require("dotenv").config();
const mongoose = require("mongoose");

//const connect = mongoose.connect("mongodb://localhost:27017/login");
const connect = mongoose.connect(process.env.MONGODB_URI, {
  retryWrites: true, // Enable retryable writes
});

// Check connection
connect
  .then(() => {
    console.log("Database successfully connected.");
  })
  .catch(() => {
    console.log("Database cannot be connected.");
  });

// Create schemas
const loginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const complaintSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: true,
  },
  Lab: {
    type: String,
    required: true,
  },
  SystemName: {
    type: String,
    required: true,
  },
  Complaint: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
});

const systemSchema = new mongoose.Schema({
  index: {
    type: Number, // Changed from Int to Number
    required: [true, "Index is required"], // Custom error message for required field
  },
  name: {
    type: String,
    required: [true, "Name is required"], // Custom error message for required field
  },
});

// Create models
const UserModel = mongoose.model("users", loginSchema);
const AdminModel = mongoose.model("admins", loginSchema);
const ComplaintModel = mongoose.model("complaints", complaintSchema);
const SystemModel = mongoose.model("systems", systemSchema);

// Export models
module.exports = {
  AdminModel: AdminModel,
  UserModel: UserModel,
  ComplaintModel: ComplaintModel,
  SystemModel: SystemModel,
};
