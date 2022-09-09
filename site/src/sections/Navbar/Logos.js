import React from "react";
import styled from "styled-components";
import pattern from "../../assets/images/brand/SVG/service-mesh-patterns-side.svg";
import { Link } from "gatsby";

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 160px;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 160px;
  }
`;
const Logo = () => {
  return (
    <LogoWrap as={Link} to="/">
      <img className="pattern" src={pattern} alt="pattern" />
    </LogoWrap>
  );
};

export default Logo;
