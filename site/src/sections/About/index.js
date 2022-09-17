import React from "react";
import { AboutStyleWrapper } from "./about.style";
import Openvector from "../../assets/images/about/Vector.png";
import Closevector from "../../assets/images/about/vector.png";

const Mainabout = () => {
  return (
    <AboutStyleWrapper>
      <h1 className="heading">About the <span className="green">Service Mesh Patterns</span> Book</h1>
      <section>
        <p className="Box">
            A service mesh is a layer in your infrastructure that facilitates communication between services and so much more.
            Its value is enormous, and the value you derive from one is very much related to what role you play in the design,
            implementation, and operations of your cloud native applications and infrastructure.
        </p>
        <p className="Box">
            As your organization adopts microservices, you also need a service mesh, the infrastructure layer that handles interservice communication in microservice architectures. This seminal book provides patterns and operational best practices to help you deploy and use service meshes in a way that meets your company's goals and needs.
        </p>
        <p className="Box">
            Developers face a wide range of choices today: which service mesh to use, which features to deploy, and the best ways to exploit and deploy those features. Whether you're investigating service meshes or already use one, authors Lee Calcote and Nic Jackson provide universal patterns applicable to any service mesh: Istio, Linkerd, Consul, App Mesh, and more.
        </p>
      </section>
      <ul>
        <li>Get a vendor-neutral perspective on where each mesh shines (and perhaps, doesn't).</li>
        <li>Understand how service meshes benefit developers, operators, and service owners differently.</li>
        <li>Determine whether you're running your mesh effectively.</li>
        <li>Avoid service mesh lock-in through use of service mesh abstractions.</li>
        <li>Learn common deployment patterns for implementing a specific service mesh function.</li>
        <li>Use configuration best practices to avoid common pitfalls.</li>
        <li>Explore federation of service mesh deployments and other service mesh types.</li>
      </ul>
      <p className="Box">
            As microservices proliferate your environment, fear not: service meshes are here to manage your service sprawl. This book shows you how.
      </p>
      <h2 className="subhead">Who is this book for?</h2>
      <div className="container">
        <img src={Openvector} alt="Open Vector" className="openv"/>
        <section className="margin">
          <p className="bbox">Identifying who this book is for has been one of the hardest challenges in writing it. The power of a service mesh is vast, and therefore, empowers individuals of many different roles.</p>
          <br />
          <p className="bbox">In short, this book is for anyone delivering workloads enabled by a service mesh and who wants to ensure their use of a service mesh provides the most possible value to the workloads and teams that rely on it.</p>
        </section>
        <img src={Closevector} alt="Close Vector" className="closev"/>
      </div>
    </AboutStyleWrapper>

  );
};

export default Mainabout;