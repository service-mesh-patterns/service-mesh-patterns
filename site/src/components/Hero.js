import React from "react";

// assets import
import cover from "../assets/images/hero/cover.svg";
import graphic from "../assets/images/hero/graphic.svg";


// styles import
import HeroStyleWrapper from "../sections/hero.style";

// ui import
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <HeroStyleWrapper>
      <img className="graphic" src={graphic} alt="Hero Section Graphic" />
      <div className="content">
        <div className="info">
          <h1 className="title">Service Mesh Patterns</h1>
          <h3 className="description">Best patterns and practices for getting the most out of Istio, Linkerd, Consul, App Mesh, or any service mesh, including those using Envoy and WebAssembly.</h3>
          <div className="credit">
            <h3>By</h3>
            <div className="author">
              <StaticImage className="icon" src="../assets/images/hero/lee_calcote.png" alt="Lee Calcote" />
              <p className="name">Lee Calcote</p>
            </div>
            <h3>and</h3>
            <div className="author">
              <StaticImage className="icon" src="../assets/images/hero/nic_jackson.png" alt="Nic Jackson" />
              <p className="name">Nic Jackson</p>
            </div>
          </div>
        </div>
        <img className="cover" src={cover} alt="service mesh pattern book cover" />
      </div>
    </HeroStyleWrapper>
  );
};

export default Hero;
