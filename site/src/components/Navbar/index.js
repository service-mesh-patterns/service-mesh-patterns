import React, { useState } from "react";
import pattern from "../../assets/images/brand/SVG/service-mesh-patterns-side.svg";
import { Link } from "gatsby";
import Layer5 from "../../assets/images/brand/SVG/Layer5.svg";
import { Navigation, Toggle , Navbox , Hamburger , LogoWrap , NavItem } from "./navbar.style";
import Button from "../../components/Button";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Navigation>
      <LogoWrap as={Link} to="/">
        <img className="pattern" src={pattern} alt="pattern" />
      </LogoWrap>
      <Toggle
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <Hamburger open={navbarOpen} />
      </Toggle>
      <Navbox open={navbarOpen}>
        <NavItem to="/chapters">Book Chapters</NavItem>
        <NavItem to="/patterns">Patterns in action</NavItem>
        <NavItem to="/authors">Meet the Authors</NavItem>
        {/* <NavItem to="https://layer5.io/company/about" external={true}>About <img className="layer5" src={Layer5} alt="Layer5 logo" /></NavItem> */}
        <Button url="https://www.oreilly.com/library/view/service-mesh-patterns/9781492086444/" external={true} secondary title="Get it Now" />
      </Navbox>
    </Navigation>
  );
};

export default Navbar;
