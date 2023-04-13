//modules imports
import React from "react";

//ui import
import Button from "../Button/index";

//assets import
import PatternsLogo from "../../assets/images/brand/SVG/service-mesh-patterns-side_white.svg";
import github from "../../assets/images/socialIcons/github-light.svg";
import forum_icon from "../../assets/images/socialIcons/forum.svg";
import mail_icon from "../../assets/images/socialIcons/mail_keppel.svg";
import slack_icon from "../../assets/images/socialIcons/slack-light.svg";
import twitter_icon from "../../assets/images/socialIcons/twitter-light.svg";
import youtube_icon from "../../assets/images/socialIcons/youtube.svg";
import docker_icon from "../../assets/images/socialIcons/docker.svg";
import linkedin_icon from "../../assets/images/socialIcons/linkedin-light.svg";

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
} from "./footer.style";

//gatsby imports
import { navigate } from "gatsby";

const Footer = () => {
  const homepageRoute = () => {
    navigate("/");
  };
  return (
    <Footerdiv>
      <Wrapperdiv>
        <Patternsdiv>
          <img alt="Patterns Logo" src={PatternsLogo} onClick={homepageRoute} />
          <p>
            Service mesh patterns help you get the most out of any service mesh.
            Each pattern can be used as a template and is customizable.
          </p>
        </Patternsdiv>
        <Resourcesdiv>
          <h3>RESOURCES</h3>
          <Resourceslink>
            <a href="https://layer5.io/learn/learning-paths">Learning Paths</a>
            <a href="https://layer5.io/resources">Resource Library</a>
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
              Service Mesh Interactive Lab
            </a>
          </Resourceslink>
        </Resourcesdiv>
        <Maildiv>
          <h3>
          Subscribe To Our <span>Mailing List</span>
          </h3>
          <form
            name="contactform"
            method="post"
            action="https://calcotestudios.us15.list-manage.com/subscribe/post?u=6b50be5aea3dfe1fd4c041d80&amp;id=6bb65defeb"
          >
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
                secondary
                title="Subscribe"
                size="large"
                variant="contained"
                style={{ backgroundColor: "#00B39F", zIndex: "1" }}
              />
            </Inputdiv>
          </form>
        </Maildiv>
      </Wrapperdiv>
      <Copyrightdiv>
        <p>@Layer5, Inc. Copyright 2022</p>
        <Icondiv>
          <a href="https://discuss.layer5.io" target="_blank" rel="noreferrer">
            <img height="30px" src={forum_icon} alt="forum" />
          </a>
          <a
            className="mail_icon"
            href="mailto:community@layer5.io"
            target="_blank"
            rel="noreferrer"
          >
            <img height="30px" src={mail_icon} alt="mail" />
          </a>
          <a href="http://slack.layer5.io/" target="_blank" rel="noreferrer">
            <img className="slack" height="30px" src={slack_icon} alt="slack" />
          </a>
          <a href="https://twitter.com/layer5" target="_blank" rel="noreferrer">
            <img
              className="twitter"
              height="30px"
              src={twitter_icon}
              alt="twitter"
            />
          </a>
          <a
            href="https://github.com/layer5io"
            target="_blank"
            rel="noreferrer"
          >
            <img className="github" height="30px" src={github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/company/layer5"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="linkedin"
              height="30px"
              src={linkedin_icon}
              alt="linkedin"
            />
          </a>
          <a
            className="youtube_icon"
            href="https://www.youtube.com/channel/UCFL1af7_wdnhHXL1InzaMvA?sub_confirmation=1"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="youtube"
              height="30px"
              src={youtube_icon}
              alt="youtube"
            />
          </a>
          <a
            className="docker_icon"
            href="https://hub.docker.com/u/layer5/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="docker"
              height="30px"
              src={docker_icon}
              alt="docker"
            />
          </a>
        </Icondiv>
      </Copyrightdiv>
    </Footerdiv>
  );
};

export default Footer;
