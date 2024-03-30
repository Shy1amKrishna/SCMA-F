import React from "react";
import "./Footer.css";
import logo_simat from "../Assets/logo-simat.png";
const Footer = () => {
  return (
    <div className="footer">
      <img id="logo" src={logo_simat} alt="logo" />
      <p id="footer_heading">Contact</p>
      <div id="contain">
        <div id="contact">
          <p>Phone:</p>
          <p>0466 2370200, 2371300,</p>
          <p>9447131000, 7902815555</p>
        </div>
        <div id="Email">
          <p>Email:</p>
          <p>principal@simat.ac.in,</p>
          <p>sreepathycollege@gmail.com</p>
        </div>
        <div id="Fax">
          <p>Fax:</p>
          <p>0466-2370300</p>
        </div>
      </div>
      <div id="address">
        <div id="contain2">
          <p id="footer_heading">Address</p>
          <div id="contain3">
            <p>Vavannor, Palakad District, Koottanad,</p>
            <p>Palakkad (Kerala)</p>
          </div>
        </div>
      </div>
      <hr />
      <div id="copyright">
        <p>
          © All Rights Reserved. Sreepathy Institute of Management and
          Technology.Developed and managed by CSE Department.
        </p>
      </div>
    </div>
  );
};

export default Footer;
