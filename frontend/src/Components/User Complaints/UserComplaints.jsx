import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserComplaints.css";
import ComputerIcon from "../Assets/computer.png"; // Renamed variable to follow convention
import { Navbar } from "../Navbar2/Navbar";
import SideMenu from "../SideMenu/SideMenu";

export const UserComplaints = () => {
  const [filter, setFilter] = useState("");
  const [systems, setSystems] = useState([]);

  // Function to handle input change for filtering
  const handleInputChange = (event) => {
    setFilter(event.target.value.toUpperCase());
  };

  useEffect(() => {
    // Fetch systems from MongoDB using Axios
    const fetchSystems = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/usercomplaints"
        );
        setSystems(response.data);
        //console.log("Data:\n" + JSON.stringify(response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchSystems();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  // Function to filter list based on input
  const filterList = (item) => {
    if (!item) return false;
    const txtValue = item.toUpperCase();
    return txtValue.includes(filter);
  };

  const handleButtonClick = async (itemId) => {
    try {
      await axios.put(`http://localhost:5000/complaints/${itemId}`, {
        status: "Fixed",
      });

      // Refetch the updated list of systems from the server
      const response = await axios.get("http://localhost:5000/usercomplaints");
      setSystems(response.data);

      console.log("Status updated successfully");
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleNotButtonClick = async (itemId) => {
    try {
      await axios.put(`http://localhost:5000/complaints/${itemId}`, {
        status: "Waiting",
      });

      // Refetch the updated list of systems from the server
      const response = await axios.get("http://localhost:5000/usercomplaints");
      setSystems(response.data);

      console.log("Status updated successfully");
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  function handleButton(data) {
    /*console.log(data);*/
    setFilter(data.toUpperCase());
  }

  return (
    <>
      <SideMenu />
      <Navbar />
      <div className="contain0">
        <div className="contain">
          <h1 className="cool-heading">user complaints</h1>
          <div className="box">
            <div className="Cinput">
              <img
                src={ComputerIcon}
                alt="Computer Icon"
                title="Computer icons created by Freepik - Flaticon"
              />
              <input
                type="text"
                placeholder="Search here!"
                onChange={handleInputChange}
              />
            </div>
            <div style={{ marginBottom: "10px" }} className="button-container2">
              <button onClick={() => handleButton("fixed")}>
                <strong>Fixed</strong>
              </button>
              <button onClick={() => handleButton("waiting")}>
                <strong>Waiting</strong>
              </button>
            </div>
            <ul id="Ulist" style={{ listStyleType: "none", padding: 0 }}>
              {systems.map((item, index) => (
                <li
                  key={index}
                  style={{
                    display:
                      filterList(item.UserName) ||
                      filterList(item.Lab) ||
                      filterList(item.SystemName) ||
                      filterList(item.Status) ||
                      filterList(item.Date)
                        ? ""
                        : "none",
                  }}
                >
                  <div style={{ marginBottom: "10px" }}>
                    <strong>User name:</strong> {item.UserName}
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <strong>Lab:</strong> {item.Lab}
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <strong>System name:</strong> {item.SystemName}
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <strong>Complaint:</strong> {item.Complaint}
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <strong>Date:</strong> {item.Date}
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <strong>Status:</strong> {item.Status}
                  </div>
                  <div
                    style={{ marginBottom: "10px" }}
                    className="button-container"
                  >
                    <button onClick={() => handleButtonClick(item._id)}>
                      <strong>Fixed</strong>
                    </button>
                    <button onClick={() => handleNotButtonClick(item._id)}>
                      <strong>Waiting</strong>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
