//modules imports
import React from "react";
import styled from "styled-components";

//mui import
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";

//assets import
import PatternsLogo from "../assets/images/brand/SVG/service-mesh-patterns-side_white.svg";
import slack from "../assets/images/socialIcons/slack-light.svg";
import docker from "../assets/images/socialIcons/docker-light.svg";
import github from "../assets/images/socialIcons/github-dark.svg";
import linkedin from "../assets/images/socialIcons/linkedin-light.svg";

const Footerdiv = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 25rem;
  background-color: black;
  align-items: center;
`;

const Wrapperdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85%;
  gap: 7rem;
`;

const Patternsdiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  width: 18rem;
  height: 100%;
`;

const Resourcesdiv = styled.div`
  height: 100%;
  gap: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Resourceslink = styled.div`
  display: flex;
  gap: 0.3rem;
  flex-direction: column;
`;

const Maildiv = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
`;

const Copyrightdiv = styled.div`
  display: flex;
  width: 70%;
  border-top: 2px solid white;
  justify-content: space-between;
`;

const Icondiv = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Inputdiv = styled.div`
  display: flex;
  gap: 1rem;
`;

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& .MuiOutlinedInput-input": {
      color: "white",
      outerWidth: "10rem",
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "white",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "white",
    },
    "& .MuiInputLabel-outlined": {
      color: "white",
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "white",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "white",
    },
  },
});

const Footer = () => {
  const styles = useStyles();
  return (
    <Footerdiv>
      <Wrapperdiv>
        <Patternsdiv>
          <img src={PatternsLogo} />
          <p>
            Layer5 helps organizations expect more from their infrastructure. We
            are enablers of the engineer and embrace developer-defined
            infrastructure.
          </p>
        </Patternsdiv>
        <Resourcesdiv>
          <h3>Resources</h3>
          <Resourceslink>
            <a href="">Learning Paths</a>
            <a href="">Resource library</a>
            <a href="">Service Mesh Books</a>
            <a href="">Service Mesh Workshops</a>
            <a href="">Service Mesh Comparison</a>
            <a href="">Service Mesh Interativs lab</a>
          </Resourceslink>
        </Resourcesdiv>
        <Maildiv>
          <h3>
            Subcribe To Our <span>Mailling List</span>
          </h3>
          <Inputdiv>
            <TextField
              size="medium"
              label="Email Address"
              id="fullWidth"
              className={styles.root}
              fullWidth
              style={{
                width: "25rem",
              }}
            />
            <Button
              size="large"
              variant="contained"
              style={{ backgroundColor: "#00B39F" }}
            >
              Subscribe
            </Button>
          </Inputdiv>
        </Maildiv>
      </Wrapperdiv>
      <Copyrightdiv>
        <p>@Layer5, Inc. Copyright 2022</p>
        <Icondiv>
          <img height="30px" src={slack}></img>
          <img height="30px" src={docker}></img>
          <img height="30px" src={github}></img>
          <img height="30px" src={linkedin}></img>
        </Icondiv>
      </Copyrightdiv>
    </Footerdiv>
  );
};

export default Footer;
