import React from "react";
import "./App.css";
import { Login } from "./Components/Login/Login";
import { NotFoundPage } from "./Components/NotFoundPage/NotFoundPage";
import { UserComplaints } from "./Components/User Complaints/UserComplaints";
import { MyComplaints } from "./Components/My Complaints/MyComplaints";
import { Routes, Route } from "react-router-dom";
import { Maintenance } from "./Components/Maintenance/Maintenance";
import { About } from "./Components/About/About";
import { Signup } from "./Components/Signup/Signup";
import { Modes } from "./Components/Modes/Modes";

function App() {
  return (
    <div className="App">
      <div id="cover">
        <Routes>
          <Route path="/" element={<Modes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/UserComplaints" element={<UserComplaints />} />
          <Route path="/MyComplaints" element={<MyComplaints />} />
          <Route path="/Maintenance" element={<Maintenance />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
