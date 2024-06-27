import React from "react";
import "./Modes.css";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar2/Navbar";
import SideMenu from "../SideMenu/SideMenu";

export const Modes = () => {
  const navigate = useNavigate();

  const handleUserClick = (path) => {
    localStorage.setItem("Mode", "User");
    navigate(path);
  };

  const handleAdminClick = (path) => {
    localStorage.setItem("Mode", "Admin");
    navigate(path);
  };

  return (
    <>
      <SideMenu />
      <Navbar />
      <div className="Mcontainer1">
        <div className="welcome_text">
          <div id="introduction">
            <h2>Welcome to Our System Maintenance Reporting Platform!</h2>
            <div id="user-features">
              <h3>For Users:</h3>
              <ul>
                <li>Easily report system damages for maintenance.</li>
                <li>Check the status of your complaints.</li>
                <li>Simple submission process for quick assistance.</li>
              </ul>
            </div>
            <div id="admin-features">
              <h3>For Admins:</h3>
              <ul>
                <li>Access and manage incoming complaints.</li>
                <li>Update complaint statuses as needed.</li>
                <li>Add other admins for efficient collaboration.</li>
              </ul>
              <p>
                Join us in our mission to uphold the reliability and performance
                of our systems by utilizing our intuitive reporting and
                management tools.
              </p>
            </div>
          </div>
        </div>
        <div className="Mcontainer2">
          <h1 className="cool-heading">Modes</h1>
          <div className="inputs">
            <div className="input" onClick={() => handleUserClick("/login")}>
              <h2>USER</h2>
            </div>
            <div className="input" onClick={() => handleAdminClick("/login")}>
              <h2>ADMIN</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
