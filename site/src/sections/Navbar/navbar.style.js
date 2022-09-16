import styled from "styled-components";
import { Link } from "gatsby";

export  const Navigation = styled.nav`
    position: sticky;
    top: 0px;
    height: 110px;
    display: flex;
    background-color: #fff;
    justify-content: space-between;
    border-bottom: 2px solid #33333320;
    margin: 0 auto;
    padding: 0 5vw;
    z-index: 2;
    align-self: center;

    @media (max-width: 768px) {
        height: 110px;
        top: 0;
        left: 0;
        right: 0;
    }
`;

export const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 12vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`;

export const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
  props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`;

export const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 160px;
  margin-left: 70px;
  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 160px;
  }
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  color: rgb(60, 73, 79);
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  gap: 6rem;
  position: relative;
  bottom: 5px;
  
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
    position: relative;
    top: 8px;
  }
  button:hover{
    cursor: pointer;
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