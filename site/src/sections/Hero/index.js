import React from "react";

// assets import
import cover from "../../assets/images/hero/cover.svg";
import graphic from "../../assets/images/hero/graphic.svg";
const LeePhoto = "../../assets/images/lee_calcote.png";
const NicPhoto = "../../assets/images/nic_jackson.png";

// styles import
import HeroStyleWrapper from "./hero.style";

// ui import
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <HeroStyleWrapper>
      <img className="graphic" src={graphic} alt="Hero Section Graphic" />
      <section className="content">
        <div className="info">
          <h1 className="title">Service Mesh Patterns</h1>
          <p className="description">Best patterns and practices for getting the most out of Istio, Linkerd, Consul, App Mesh, or any service mesh, including those using Envoy and WebAssembly.</p>
          <div className="credit">
            <p className="by-junction">By</p>
            <div className="author">
              <StaticImage className="icon" src={LeePhoto} alt="Lee Calcote" />
              <p className="name">Lee Calcote</p>
            </div>
            <p className="junction">and</p>
            <div className="author">
              <StaticImage className="icon" src={NicPhoto} alt="Nic Jackson" />
              <p className="name">Nic Jackson</p>
            </div>
          </div>
        </div>
        <img className="cover" src={cover} alt="service mesh pattern book cover" />
      </section>
    </HeroStyleWrapper>
  );
};

export default Hero;
