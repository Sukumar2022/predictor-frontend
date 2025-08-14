import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(".navbar .logo", {
      duration: 1,
      x: -647,
    });

    tl.from(".nav-Link ul a", {
      duration: 1,
      y: -647,
      stagger: 0.3,
    });
  });
  return (
    <>
      <div class="navbar">
        <div class="logo">
          <img src="images/logo.png" alt="logo" srcset="" />
        </div>
        <div class="nav-Link">
          <ul>
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="/about">
              <li>About</li>
            </NavLink>
            <NavLink to="/service">
              <li>Service</li>
            </NavLink>
            <NavLink to="/feedback">
              <li>feedback</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
