import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <div className='Navbar'>
        {" "}
        <Link style={{ color: "black", textDecoration: "none" }} to='/'>
          {" "}
          Photo comparison
        </Link>
        <Link
          style={{ color: "black", textDecoration: "none" }}
          to='/comparison'
        >
          comparisonTable
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
