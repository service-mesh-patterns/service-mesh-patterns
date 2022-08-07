//modules imports
import React from "react";

//ui import
import Button from "../reusecore/Button/index";

//assets import
import PatternsLogo from "../assets/images/brand/SVG/service-mesh-patterns-side_white.svg";
import slack from "../assets/images/socialIcons/slack-light.svg";
import docker from "../assets/images/socialIcons/docker-light.svg";
import github from "../assets/images/socialIcons/github-dark.svg";
import linkedin from "../assets/images/socialIcons/linkedin-light.svg";

//styles import
import {
  Footerdiv,
  Wrapperdiv,
  Patternsdiv,
  Resourcesdiv,
  Resourceslink,
  Maildiv,
  Copyrightdiv,
  Icondiv,
  Inputdiv,
} from "../sections/footer.style";

const Footer = () => {
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
            <input
              className="inputrow subscribe-email"
              type="email"
              placeholder="Email Address"
              name="EMAIL"
              id="mce-EMAIL"
              onInvalid={(e) =>
                e.target.setCustomValidity("Please fill-in this field")
              }
              onInput={(e) => e.target.setCustomValidity("")}
              required
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
          <img src={slack}></img>
          <img src={docker}></img>
          <img src={github}></img>
          <img src={linkedin}></img>
        </Icondiv>
      </Copyrightdiv>
    </Footerdiv>
  );
};

export default Footer;
