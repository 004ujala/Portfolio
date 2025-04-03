import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import "../css/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="navbarMain">
        <h2>Aditya Narayan Sharma</h2>

        {/* Small Screen Navbar Icons */}
        <div className="smallNav" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faX : faBars} />
        </div>

        {/* Normal Navbar for Large Screens & Small Screen Dropdown */}
        <div className={`navBar ${menuOpen ? "active" : ""}`}>
          <ul>
            <li><Link className="nav" to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link className="nav" to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link className="nav" to="/education" onClick={() => setMenuOpen(false)}>Education</Link></li>
            <li><Link className="nav" to="/experience" onClick={() => setMenuOpen(false)}>Experience</Link></li>
            <li><Link className="nav" to="/project" onClick={() => setMenuOpen(false)}>Project</Link></li>
            <li><Link className="nav" to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
