import React from "react";
import personIcon from "../../assets/images/chapters/person.svg";
import CallOutWrapper from "./callout.style";

import { StaticImage } from "gatsby-plugin-image";

const layer5Logo = "../../assets/images/chapters/layer5-discuss-white.png";

const Callout = () => {
  return (
    <CallOutWrapper>
      <a href="https://discuss.layer5.io/" target="_blank" rel="noreferrer">
        <div className="row">
          <img src={personIcon} alt="person icon" />
          <p>JOIN THE CONVERSATION</p>
        </div>
        <p>Join the Discussion Forum</p>
        <StaticImage src={layer5Logo} alt="layer5 logo" />
      </a>
    </CallOutWrapper>
  );
};

export default Callout;
