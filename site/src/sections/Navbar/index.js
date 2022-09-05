import React from "react";
import { NavStyleWrapper } from "./navbar.style";
import pattern from "../../assets/images/brand/SVG/service-mesh-patterns-side.svg";
import Layer5 from "../../assets/images/brand/SVG/Layer5.svg";

const Navbar = () => {
  return (
    <NavStyleWrapper>
      <nav>
        <ul className="navbar">
          <img className="pattern" src={pattern} alt="pattern" />
          <li>Book Chapters</li>
          <li>Patterns In Action</li>
          <li>Meet the Authors</li>
          <li>About <img className="L5" src={Layer5} alt="Layer5" /> </li>
          <button><span className="label">Get it Now</span></button>
        </ul>
      </nav>
    </NavStyleWrapper>
  );
};

export default Navbar;