import React, { useState } from "react";
import "./navbar.css";
import logo from "../../images/logo.PNG";
import { Link } from "react-scroll";

import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="menu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          // checks if id is coorect or not
          smooth={true}
          offset={-100}
          duration={500}
          className="itemsList"
        >
          Home
        </Link>

        <Link
          activeClass="active"
          to="skills"
          spy={true}
          // checks if id is coorect or not
          smooth={true}
          offset={-50}
          duration={500}
          className="itemsList"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          // checks if id is coorect or not
          smooth={true}
          offset={-100}
          duration={500}
          className="itemsList"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          // checks if id is coorect or not
          smooth={true}
          offset={-100}
          duration={500}
          className="itemsList"
        >
          Contact
        </Link>
      </div>
      {/* <button
        className="menubtn"
       git add README.md
       
      >
        <div className="icon">
          <BiMessageDetail />
        </div>
        Contact Me
      </button> */}

      <AiOutlineMenu
        className="mobmenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navmenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          // checks if id is coorect or not
          smooth={true}
          offset={-100}
          duration={500}
          className="items"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>

        <Link
          activeClass="active"
          to="skills"
          spy={true}
          // checks if id is coorect or not
          smooth={true}
          offset={-50}
          duration={500}
          className="items"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          // checks if id is coorect or not
          smooth={true}
          offset={-100}
          duration={500}
          className="items"
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          // checks if id is coorect or not
          smooth={true}
          offset={-100}
          duration={500}
          className="items"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
