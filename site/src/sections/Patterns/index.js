import React from "react";
import PatternsStyleWrapper from "./patterns.style";
import Container from "../../components/Layout/Container";
import howItWorksVideo from "../../assets/videos/how-it-works.mp4";
import pattern from "../../assets/images/brand/SVG/service-mesh-pattern.svg";
import meshery from "../../assets/images/brand/PNG/meshery-logo.png";
import Button from "../../components/Button";

function Patterns() {
  return (
    <PatternsStyleWrapper>
      <Container>
        <section className="overview">
          <h1>Overview</h1>
          <div className="overview-description">
            <p>A service mesh is a layer in your infrastructure that facilitates communication between services… and so much more. Its value is enormous, and the value you derive from one is very much related to what role you play in the design, implementation, and operations of your cloud native applications and infrastructure.</p>
            <p>As your organization adopts microservices, you also need a service mesh, the infrastructure layer that handles interservice communication in microservice architectures. This seminal book provides patterns and operational best practices to help you deploy and use service meshes in a way that meets your company's goals and needs.</p>
          </div>
        </section>
        <section className="how-it-works">
          <h2>
            How it Works
            <span>See It in Action</span>
          </h2>
          <video className="how-it-works-video" controls>
            <source src={howItWorksVideo} type="video/mp4" />
          </video>
        </section>
        <section className="patterns">
          <div className="pattern-logo">
            <img className="logo" src={pattern} alt="Patterns Logo" />
            <Button className="btn" url="/" secondary title="Patterns" />
          </div>
          <p className="tagline">Easily import any catalog item into Meshery.</p>
        </section>
        <section className="try-meshmap">
          <div className="meshmap">
            <img className="logo" src={meshery} alt="Meshery Logo" />
            <div className="meshery-detail">
              <div className="title">
                <p>The extensible Kubernetes Manager, Run</p>
                <p>Meshery today!</p>
              </div>
              <Button className="btn" url="/" secondary title="Try MeshMap" />
            </div>
          </div>
        </section>
      </Container>
    </PatternsStyleWrapper>
  );
}

export default Patterns;
