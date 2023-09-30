import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import Toogle from "../Toggle/Toogle";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="name">Ehsan</div>
        <Toogle />
      </div>

      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>
              <Link to="intro" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500}>
                Services
              </Link>
            </li>
            <li>
              <Link to="experience" smooth={true} duration={500}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="testimonial" smooth={true} duration={500}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        <button className="button n-button">Contact us</button>
      </div>
    </div>
  );
};

export default Navbar;
