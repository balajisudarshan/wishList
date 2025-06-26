import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">Food Blog</div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul className="links">
          <li>Home</li>
          <li>Recipes</li>
          <li>Favourite</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default NavBar;
