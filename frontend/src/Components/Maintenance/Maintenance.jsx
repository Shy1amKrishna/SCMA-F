import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import "./Maintenance.css";
import Computer_icon from "../Assets/computer.png";
import axios from "axios"; // Import Axios library
import { Navbar } from "../Navbar2/Navbar";
import SideMenu from "../SideMenu/SideMenu";

export const Maintenance = () => {
  const [complaint, setComplaint] = useState("");
  const [systemName, setSystemName] = useState("");
  const UserName = localStorage.getItem("userName");
  let Lab;
  //console.log(Lab);
  //const navigate = useNavigate();
  /*const backendAddress = "http://localhost:5000";*/
  //console.log("SystemName:",systemName);
  const backendAddress = "http://localhost:5000";

  // Create a new Date object
  let currentDate = new Date();

  // Get the current date
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1; // Months are zero-based, so January is 0
  let year = currentDate.getFullYear();

  // Format the date as desired
  let formattedDate = day + "/" + month + "/" + year;

  //console.log(formattedDate); // Output: e.g., 23/2/2024

  function reset() {
    setComplaint("");
    //navigate("/");
  }

  function getOption() {
    let selectElement = document.querySelector("#labs");
    Lab = selectElement.value;
  }

  async function handleSubmit(e) {
    getOption();
    e.preventDefault();
    if (complaint.length > 10 && complaint.length < 500) {
      try {
        // Sending data to the backend using Axios
        const result = await axios.post(backendAddress + "/complaints", {
          UserName: UserName,
          Lab: Lab,
          SystemName: systemName,
          Complaint: complaint,
          Date: formattedDate,
        });
        alert(result.data);
        reset();
      } catch (error) {
        alert("Sorry something wrong happened." + error);
      }
    } else {
      alert("Keep complaint length between 10 and 500.");
    }
  }

  return (
    <>
      <SideMenu />
      <Navbar />
      <div className="container1">
        <div className="container2">
          <h1 className="cool-heading">Maintenance</h1>
          <div className="underline"></div>
          <div className="box">
            <form onSubmit={handleSubmit}>
              <div className="Minput">
                <img
                  src={Computer_icon}
                  alt="Computer Icon"
                  title="Computer icons created by Freepik - Flaticon"
                />
                <input
                  type="text"
                  placeholder="System name?"
                  required
                  onChange={(e) => {
                    setSystemName(e.target.value);
                  }}
                />
              </div>
              <div id="lab">
                <label htmlFor="labs">Select lab:</label>
                <select id="labs" name="labs">
                  <option value="Compiler Lab">Compiler Lab</option>
                  <option value="Software Lab">Software Lab</option>
                  <option value="Programming Lab">Programming Lab</option>
                </select>
              </div>
              <div id="ComplaintBox">
                <label htmlFor="Complaint">Complaint:</label>
                <textarea
                  autoFocus
                  id="Complaint"
                  type="text"
                  name="Complaint"
                  placeholder="Enter the problem"
                  required
                  value={complaint}
                  onChange={(e) => {
                    setComplaint(e.target.value);
                  }}
                ></textarea>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
