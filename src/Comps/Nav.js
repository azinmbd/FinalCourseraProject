import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

function Nav() {
  return (
    <nav className="container nav-container">
      <div className="logo-container">
        <img src={logo} alt="Little Lemon Logo" width={150} />
      </div>
      <ul className="nav-links">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link" to="/reservation">
            Reservation
          </Link>
        </li>
        <li>
          <Link className="link" to="/order-online">
            Order Online
          </Link>
        </li>
        <li>
          <Link className="link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
