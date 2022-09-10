import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Layer5 from "../../assets/images/brand/SVG/Layer5.svg";

const NavItem = styled(Link)`
  text-decoration: none;
  color: rgb(60, 73, 79);
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  gap: 6rem;
  
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: rgb(0, 211, 169);
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: rgb(0, 211, 169);
    ::after {
      width: 100%;
    }
  }

  button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1.2rem 1.92rem;

    width: 8.94rem;
    height: 2.8rem;
    background: #00B39F;
    border-radius: 0.24rem;
  }

  .layer5{
    position: relative;
    top: 20px;
    right: 55px;
    @media (max-width: 991px) {
      position: relative;
      top: 20px;
      right: 50px;
    }
    @media (max-width: 768px) {
      position: relative;
      top: 20px;
      right: 75px;
    }
  }

  .label{
    width: 5.1rem;
    height: 2.4rem;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 0.96rem;
    line-height: 1.32rem;
    color: #FFFFFF;
    position: relative;
    top: 10px;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`;
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Book Chapters</NavItem>
      <NavItem to="/patterns">Patterns In Action</NavItem>
      <NavItem to="/about">About <img className="layer5" src={Layer5} alt="Layer5 logo" /></NavItem>
      <NavItem to="/get"><button><span className="label">Get it Now</span></button></NavItem>
    </>
  );
};

export default NavbarLinks;

