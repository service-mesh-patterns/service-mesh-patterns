import React from "react";
import personIcon from "../../assets/images/chapters/person.svg";
import layer5Logo from "../../assets/images/chapters/layer5-discuss-white.png";

const Callout = () => {
  return (
    <div className="callout">
      <a href="https://discuss.layer5.io/">
        <div className="row">
          <img src={personIcon} alt="person icon" />
          <p>JOIN THE CONVERSATION</p>
        </div>
        <p>Join the Discussion Forum</p>
        <img src={layer5Logo} alt="layer5 logo" />
      </a>
    </div>
  );
};

export default Callout;
