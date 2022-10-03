import styled from "styled-components";
import { Link } from "gatsby";

export  const Navigation = styled.nav`
    position: sticky;
    top: 0px;
    height: 110px;
    display: flex;
    background-color: #fff;
    justify-content: space-between;
    box-shadow: 0px 10px 25px rgba(0, 179, 159, 0.2);
    margin: 0 auto;
    padding: 0 5vw;
    z-index: 3;
    align-self: center;

    @media (max-width: 912px) {
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

  @media (max-width: 912px) {
    display: flex;
  }
`;

export const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 912px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 12vh;
    left: ${props => (props.open ? "0" : "-100%")};
  }

  button {
    margin-left: 1rem;

    @media (max-width: 912px) {
      margin: 2rem auto;
    }
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
  @media (max-width: 912px) and (orientation: landscape) {
    flex: 0 1 160px;
  }
  @media (max-width: 980px) {
    width: 90%;
  }
  @media (max-width: 965px) {
    min-width: 15%;
  }
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  color: rgb(60, 73, 79);
  margin: 0 1rem;
  transition: all 200ms ease-in;
  position: relative;
  position: relative;
  max-width: 6rem;
  white-space: pre-wrap;
  
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

  .layer5{
    position: relative;
    right: 8px;
    min-width: 120%;
    @media (max-width: 912px) {
      position: relative;
      top: 20px;
      right: 85px;
    }
  }

  @media (max-width: 912px) {
    margin: 20px 0;
    font-size: 1.5rem;
    max-width: none;
    white-space: nowrap;
    z-index: 6;
  }
`;