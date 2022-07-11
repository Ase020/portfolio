import React from "react";
import "./topbar.scss";
import { Person, Mail } from "@mui/icons-material";

function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            aseDesign.
          </a>
          <div className="item-container">
            <Person className="icon" />
            <span>+254 718 424 876</span>
          </div>

          <div className="item-container">
            <Mail className="icon" />
            <span>felixasejunior@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
