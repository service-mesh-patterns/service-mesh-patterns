import React from "react";
import PatternsStyleWrapper from "./patterns.style";
import Container from "../../components/Layout/Container";

function Patterns() {
  return (
    <PatternsStyleWrapper>
      <Container>
        <section className="overview-content">
          <h1>Overview</h1>
          <div className="overview-description">
            <p>A service mesh is a layer in your infrastructure that facilitates communication between services… and so much more. Its value is enormous, and the value you derive from one is very much related to what role you play in the design, implementation, and operations of your cloud native applications and infrastructure.</p>
            <p>As your organization adopts microservices, you also need a service mesh, the infrastructure layer that handles interservice communication in microservice architectures. This seminal book provides patterns and operational best practices to help you deploy and use service meshes in a way that meets your company's goals and needs.</p>
          </div>
        </section>
      </Container>
    </PatternsStyleWrapper>
  );
}

export default Patterns;
