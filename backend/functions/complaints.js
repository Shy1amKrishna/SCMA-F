const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const bcrypt = require("bcrypt");
const collection = require("../config");

const app = express();
app.use(express.json());
app.use(cors());

// Complaints endpoint
app.post("/complaints", async (req, res) => {
  try {
    const { UserName, Lab, SystemName, Complaint, Date } = req.body;
    console.log("Complaint received from frontend:", req.body);

    const newComplaint = {
      UserName: UserName,
      Lab: Lab,
      SystemName: SystemName,
      Complaint: Complaint,
      Date: Date,
      Status: "Waiting",
    };

    await collection.ComplaintModel.create(newComplaint); // Create new complaint
    return res.send("Complaint recorded successfully");
  } catch (error) {
    console.error("Complaint handling error:", error);
    return res.status(500).send("Internal server error"); // Return error for any server-side error
  }
});

module.exports.handler = serverless(app);
