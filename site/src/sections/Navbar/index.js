import React, { useState } from "react";
import pattern from "../../assets/images/brand/SVG/service-mesh-patterns-side.svg";
import { Link } from "gatsby";
import Layer5 from "../../assets/images/brand/SVG/Layer5.svg";
import { Navigation, Toggle , Navbox , Hamburger , LogoWrap , NavItem } from "./navbar.style";
import Button from "../../components/Button";

const Navbar1 = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Navigation>
      <LogoWrap as={Link} to="/">
        <img className="pattern" src={pattern} alt="pattern" />
      </LogoWrap>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavItem to="/">Book Chapters</NavItem>
          <NavItem to="/">Meet the Authors</NavItem>
          <NavItem to="/">Patterns in action</NavItem>
          <NavItem to="/about">About <img className="layer5" src={Layer5} alt="Layer5 logo" /></NavItem>
          <NavItem to="/get"><Button secondary className="banner-btn two" title="Get it Now" /></NavItem>
        </Navbox>
      ) : (
        <Navbox open>
          <NavItem to="/">Book Chapters</NavItem>
          <NavItem to="/">Meet the Authors</NavItem>
          <NavItem to="/">Patterns in action</NavItem>
          <NavItem to="/about">About <img className="layer5" src={Layer5} alt="Layer5 logo" /></NavItem>
          <NavItem to="/get"><Button secondary className="banner-btn two" title="Get it Now" /></NavItem>
        </Navbox>
      )}
    </Navigation>
  );
};

export default Navbar1;
