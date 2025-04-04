import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import "../css/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbarMain">
        <p className="fs-2">Aditya Narayan Sharma</p>

        {/* Hamburger Icon (Mobile View) */}
        <div className="smallNav" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faX : faBars} />
        </div>

        {/* Navbar Links */}
        <ul className={`navBar ${menuOpen ? "active" : ""}`}>
          <li><Link className="nav" to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link className="nav" to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link className="nav" to="/education" onClick={() => setMenuOpen(false)}>Education</Link></li>
          <li><Link className="nav" to="/experience" onClick={() => setMenuOpen(false)}>Experience</Link></li>
          <li><Link className="nav" to="/project" onClick={() => setMenuOpen(false)}>Project</Link></li>
          <li><Link className="nav" to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
