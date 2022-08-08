import React from "react";

// assets import
import cover from "../assets/images/hero/cover.svg";
import icon1 from "../assets/images/hero/lee_calcote.png";
import icon2 from "../assets/images/hero/nic_jackson.png";
import graphic from "../assets/images/hero/graphic.svg";


// styles import
import HeroStyleWrapper from "../sections/hero.style";

const Author = ({ src, name }) => {
  return (
    <div className="author">
      <img src={src} alt={name} />
      <p className="name">{name}</p>
    </div>
  );
};

const Hero = () => {
  return (
    <HeroStyleWrapper>
      <img className="graphic" src={graphic} alt="" />
      <div className="content">
        <div className="info">
          <h1 className="title">Service Mesh Patterns</h1>
          <h3 className="description">Best patterns and practices for getting the most out of Istio, Linkerd, Consul, App Mesh, or any service mesh, including those using Envoy and WebAssembly.</h3>
          <div className="credit">
            <p>By</p>
            <Author src={icon1} name="Lee Calcote" />
            <p>and</p>
            <Author src={icon2} name="Nic Jackson" />
          </div>
        </div>
        <img className="cover" src={cover} alt="service mesh pattern book cover" />
      </div>
    </HeroStyleWrapper>
  );
};

export default Hero;
