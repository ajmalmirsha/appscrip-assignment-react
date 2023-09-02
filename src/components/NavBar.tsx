"use client";
import { useState } from "react";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      {/* logo section */}
      <h1 id="logo">LOGO</h1>
      <a
        href="#"
        onClick={() => setToggle((prev) => !prev)}
        className="toggle-button"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <section id="menu" className={toggle ? "active" : ""}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Our Blog</li>
          <li>Support</li>
          <li>Affiliate</li>
          <li>Programs</li>
        </ul>
      </section>
      <span className="btns-sec">
        <span className={toggle ? "active" : ""} id="login-btn">
          Login
        </span>
        <button className={toggle ? "active" : ""} id="signup-btn">
          Sign up
        </button>
      </span>
    </nav>
  );
}
