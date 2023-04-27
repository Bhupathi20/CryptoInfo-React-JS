import React from "react";
import { FaBolt } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <Link to="/">
      <div className="navbar">
        <FaBolt className="icon" />
        <h1>
          Crypto<span className="purple">Info</span>
        </h1>
      </div>
    </Link>
  );
};

export default Navbar;
