import React from "react";
import { NavStyleWrapper } from "./navbar.style";
import pattern from "../../assets/images/brand/SVG/service-mesh-patterns-side.svg";
import Layer5 from "../../assets/images/brand/SVG/Layer5.svg";
const Navbar = () => {
  return (
    <NavStyleWrapper>
      <img className="pattern" src={pattern} alt="pattern" />
      <h2 className="text">Book Chapters</h2>
      <h2 className="text">Patterns In-Action</h2>
      <h2 className="text">Meet the Authors</h2>
      <h2 className="text">About 
      <img className="pattern" src={Layer5} alt="Layer5" />
      </h2>
      <div className="button"><span className="label">Get it Now</span></div>
    </NavStyleWrapper>
  );
};

export default Navbar;