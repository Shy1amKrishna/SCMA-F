const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const bcrypt = require("bcrypt");
const collection = require("../config");

const app = express();
app.use(express.json());
app.use(cors());

// Update complaint status endpoint
app.put("/complaints/:id", async (req, res) => {
  try {
    const { id } = req.params; // Extract complaint ID from request parameters
    const { status } = req.body; // Extract new status from request body

    // Update the status of the complaint with the provided ID
    await collection.ComplaintModel.findByIdAndUpdate(id, {
      Status: status,
    }).sort({
      Status: -1, //sorting in descenting order
    });

    return res.send("Complaint status updated successfully");
  } catch (error) {
    console.error("Error updating complaint status:", error);
    return res.status(500).send("Internal server error"); // Return error for any server-side error
  }
});

module.exports.handler = serverless(app);
