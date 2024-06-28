import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SideMenu.css";

const SideMenu = () => {
  const [userName, setUserName] = useState(localStorage.getItem("userName")); //fetching username from local storage
  const [isLogged, setLogged] = useState(localStorage.getItem("isLogged")); //fetching logged state fron local storage
  const [mode, setMode] = useState(localStorage.getItem("Mode")); //fetching Mode fron local storage
  const navigate = useNavigate();

  useEffect(() => {
    setLogged(localStorage.getItem("isLogged"));
    setUserName(localStorage.getItem("userName"));
    setMode(localStorage.getItem("Mode"));
    //console.log("username = " + userName + " logged = " + isLogged);
  }, [userName, isLogged, mode]);

  const LogOut = () => {
    localStorage.setItem("userName", "");
    localStorage.setItem("isLogged", "false");
    localStorage.setItem("systemName", "");
    localStorage.setItem("Mode", "");
    localStorage.setItem("Lab", "");
    setUserName("");
    setLogged("false");
    navigate("/");
    //console.log("username = " + userName + " logged = " + isLogged);
  };

  return (
    <>
      <div id="sideMenuContainer">
        <input type="checkbox" className="toggle" id="checkbox" />
        <div className="toggle">
          <span className="top_line common"></span>
          <span className="middle_line common"></span>
          <span className="bottom_line common"></span>
        </div>
        <div className="slide">
          <p id="menu_heading">MENU</p>
          <hr />
          {isLogged === "true" ? (
            <a id="user_name" href="/">
              <p>{userName}</p>
              <button id="logout_button" onClick={LogOut}>
                Logout
              </button>
            </a>
          ) : null}
          <hr />
          <div id="list">
            <ul>
              {isLogged === "true" && mode === "User" ? (
                <li>
                  <a className="a_sidemenu" href="/MyComplaints">
                    My Complaints
                  </a>
                </li>
              ) : null}
              {isLogged === "true" && mode === "Admin" ? (
                <li>
                  <a className="a_sidemenu" href="/signup">
                    Add admin
                  </a>
                </li>
              ) : null}
              <li>
                <a className="a_sidemenu" href="/About">
                  About us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
