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
          <img alt="Patterns Logo" src={PatternsLogo} />
          <p>
            Layer5 helps organizations expect more from their infrastructure. We
            are enablers of the engineer and embrace developer-defined
            infrastructure.
          </p>
        </Patternsdiv>
        <Resourcesdiv>
          <h3>Resources</h3>
          <Resourceslink>
            <a href="https://layer5.io/learn/learning-paths">Learning Paths</a>
            <a href="https://layer5.io/resources">Resource library</a>
            <a href="https://layer5.io/learn/service-mesh-books">
              Service Mesh Books
            </a>
            <a href="https://layer5.io/learn/service-mesh-workshops">
              Service Mesh Workshops
            </a>
            <a href="https://layer5.io/service-mesh-landscape">
              Service Mesh Comparison
            </a>
            <a href="https://layer5.io/learn/service-mesh-labs">
              Service Mesh Interativs lab
            </a>
          </Resourceslink>
        </Resourcesdiv>
        <Maildiv>
          <h3>
            Subcribe To Our <span>Mailling List</span>
          </h3>
          <Inputdiv>
            <from
              name="contactform"
              method="post"
              action="https://calcotestudios.us15.list-manage.com/subscribe/post?u=6b50be5aea3dfe1fd4c041d80&amp;id=6bb65defeb"
            >
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
            </from>
          </Inputdiv>
        </Maildiv>
      </Wrapperdiv>
      <Copyrightdiv>
        <p>@Layer5, Inc. Copyright 2022</p>
        <Icondiv>
          <img alt="slack" src={slack}></img>
          <img alt="docker" src={docker}></img>
          <img alt="github" src={github}></img>
          <img alt="linkedin" src={linkedin}></img>
        </Icondiv>
      </Copyrightdiv>
    </Footerdiv>
  );
};

export default Footer;
