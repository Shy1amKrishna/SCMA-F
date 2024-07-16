const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const collection = require("../config"); // Importing database models and configuration

const app = express(); // Creating an Express application
app.use(express.json()); // Middleware to parse JSON requests
app.use(cors()); // Middleware to enable CORS (Cross-Origin Resource Sharing)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});
/*
//User Login endpoint
app.post("/Userlogin", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await collection.UserModel.findOne({ name: username });

    if (!user) {
      return res.status(404).send("User not found"); // Return error if user not found
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      return res.send("Login successful"); // Return success message if password matches
    } else {
      return res.status(401).send("Incorrect password"); // Return error if password is incorrect
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).send("Internal server error"); // Return error for any server-side error
  }
});

//Admin Login endpoint
app.post("/Adminlogin", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await collection.AdminModel.findOne({ name: username });

    if (!user) {
      return res.status(404).send("User not found"); // Return error if user not found
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      return res.send("Login successful"); // Return success message if password matches
    } else {
      return res.status(401).send("Incorrect password"); // Return error if password is incorrect
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).send("Internal server error"); // Return error for any server-side error
  }
});

// user Signup endpoint
app.post("/UserSignup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await collection.UserModel.findOne({ name: username });

    if (existingUser) {
      return res.send("User already exists. Please try another username."); // Return error if user already exists
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = {
      name: username,
      password: hashedPassword,
    };

    await collection.UserModel.create(newUser); // Create new user
    return res.send("User created successfully.");
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).send("Internal server error"); // Return error for any server-side error
  }
});

// Admin Signup endpoint
app.post("/AdminSignup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await collection.AdminModel.findOne({
      name: username,
    });

    if (existingUser) {
      return res.send("User already exists. Please try another username."); // Return error if user already exists
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = {
      name: username,
      password: hashedPassword,
    };

    await collection.AdminModel.create(newUser); // Create new user
    return res.send("User created successfully.");
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).send("Internal server error"); // Return error for any server-side error
  }
});

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

// Get list of comlaints for admin endpoint
app.get("/usercomplaints", async (req, res) => {
  try {
    //const usercomplaints = await collection.SystemModel.find(); // Fetch list of usercomplaints from database
    const usercomplaints = await collection.ComplaintModel.find().sort({
      Status: -1, //sorting in descenting order
    });
    //console.log(usercomplaints);
    return res.json(usercomplaints); // Return list of usercomplaints as JSON response
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" }); // Return error for any server-side error
  }
});

//get list of complaints for user endpoint
app.get("/mycomplaints/:username", async (req, res) => {
  try {
    const username = req.params.username;

    // Fetch data from the database based on the username
    const mycomplaints = await collection.ComplaintModel.find({
      UserName: username,
    }).sort({
      Status: -1, //sorting in descenting order
    });

    //console.log(mycomplaints);
    return res.json(mycomplaints); // Return list of mycomplaints as JSON response
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" }); // Return error for any server-side error
  }
});

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
*/
const port = process.env.PORT || 5000; // Set port for server
app.listen(port, () => {
  console.log("Server running on port:", port); // Start server and log port number
});
