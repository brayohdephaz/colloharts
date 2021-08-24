import React from "react";
import "./header.css";
import SocialFollow from "../SocialFollow/SocialFollow";
import NavbarComp from "../Navbar/NavbarComp";

const Header = () => {
  return (
    <div className="header ">
      <div>
        {/* BRAND */}
        <div className="brand">
          <h1>COLLOH KOLLIN ARTS</h1>
          <span className="socialdiv">
            <SocialFollow />
          </span>
        </div>
      </div>
      <div className="navbar-comp">
        <NavbarComp />
      </div>
    </div>
  );
};

export default Header;
