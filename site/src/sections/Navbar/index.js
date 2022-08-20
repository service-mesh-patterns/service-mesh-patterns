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
          <li className="text">Book Chapters</li>
          <li className="text">Patterns In-Action</li>
          <li className="text">Meet the Authors</li>
          <li className="text">About <img className="pattern" src={Layer5} alt="Layer5" /> </li>
          <div className="button"><span className="label">Get it Now</span></div>
        </ul>
      </nav>
    </NavStyleWrapper>
  );
};

export default Navbar;