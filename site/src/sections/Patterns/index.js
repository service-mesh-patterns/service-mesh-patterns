import React from "react";
import PatternsStyleWrapper from "./patterns.style";
import Container from "../../components/Layout/Container";
import howItWorksVideo from "../../assets/videos/how-it-works.webm";
import pattern from "../../assets/images/brand/SVG/service-mesh-pattern.svg";
import meshery from "../../assets/images/brand/SVG/meshery-logo.svg";
import Button from "../../components/Button";
import patternsData from "./patternData";
import PatternCard from "./patternCard";

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
            How Cloud Native Patterns Work
            <span>Meshery in-Action</span>
          </h2>
          <video className="how-it-works-video" controls>
            <source src={howItWorksVideo} type="video/webm" />
          </video>
        </section>
        <section className="patterns">
          <div className="pattern-logo">

            <img className="logo" src={pattern} alt="Patterns Logo" />
            <Button className="btn" url="/patterns" secondary title="Open Meshery Catalog" />
          </div>
          <p className="tagline">Easily import any pattern into Meshery.</p>
          <div className="pattern-card">
            {patternsData.map((pattern, idx) => (
              <PatternCard key={idx} title={pattern.title} label={pattern.label} image={pattern.image} />
            ))}
          </div>
        </section>
        <section className="try-meshery">
          <div className="meshery">
            <img className="logo" src={meshery} alt="Meshery Logo" />
            <div className="meshery-detail">
              <div className="title">
                {/* <p>The extensible Kubernetes manager.</p> */}
                <p>Drag-and-drop your cloud native infrastructure using a pallete of thousands of versioned Kubernetes components.</p>
              </div>
              <Button className="meshery-btn" external url="https://layer5.io/meshmap" secondary title="Try MeshMap" />
            </div>
          </div>
        </section>
      </Container>
    </PatternsStyleWrapper>
  );
}

export default Patterns;
