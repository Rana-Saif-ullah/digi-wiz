import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav__bar">
      <NavLink exact to="/" className="logo">
        <img src="assets/images/logo.png" alt="Digi Wiz" loading="lazy" />
      </NavLink>
      <div className="nav__links" id="nav__links">
        <NavLink exact to="/" className="link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" className="link" activeClassName="active">
          About Us
        </NavLink>
        <NavLink to="/choose" className="link" activeClassName="active">
          Why Choose Us?
        </NavLink>
        <NavLink to="/portfolio" className="link" activeClassName="active">
          Our Projects
        </NavLink>
        <NavLink to="/contact" className="link" activeClassName="active">
          Contact
        </NavLink>
      </div>
      <div id="menu__center" className="menu__center">
        <div />
      </div>
    </nav>
  );
}

export default Navbar;
