import React from "react";
import SideMenu from "../SideMenu/SideMenu";
import { Navbar } from "../Navbar2/Navbar";
import "./About.css";

const teamMembers = [
  { name: "Shyam Krishna", role: "Leader", image: "/images/alice.jpg" },
  {
    name: "Sayooj Manikandan",
    role: "Code and Design",
    image: "/images/bob.jpg",
  },
  {
    name: "Anjali warior",
    role: "Backend support",
    image: "/images/charlie.jpg",
  },
  { name: "Adithyan", role: "Backend support", image: "/images/dana.jpg" },
];

export const About = () => {
  return (
    <>
      <SideMenu />
      <Navbar />
      <div className="about-us">
        <h1>About Us</h1>
        <p>
          Welcome to our company! We are committed to providing the best service
          in the industry.
        </p>
        <p>
          Our team is dedicated to ensuring customer satisfaction and delivering
          top-notch products.
        </p>
        <h2>Our Team</h2>
        <div className="team">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
        <h2>Our College</h2>
        <p>
          We are proud to be associated with Sreepathy Institute of Management
          and Technology.
        </p>
        <footer>
          <p>
            &copy; {new Date().getFullYear()} Sreepathy Institute of Management
            and Technology. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};
