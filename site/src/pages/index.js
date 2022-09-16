import * as React from "react";
import Layout from "../components/layout";
import SeoComponent from "../components/seo";
import Hero from "../sections/Hero";
import SectionWrapper from "./index.style";
import PatternsLogo from "../assets/images/brand/SVG/service-mesh-patterns-side_white.svg";

import Navbar from "../sections/Navbar";
import Footer from "../components/Footer/index";


const IndexPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "Service Mesh Patterns",
    url: "https://service-mesh-patterns.github.io/service-mesh-patterns/",
    logo: "https://service-mesh-patterns.github.io/service-mesh-patterns/images/service-mesh-pattern.png",
    sameAs: ["https://github.com/service-mesh-patterns/service-mesh-patterns"],
  };
  return (
    <>
      <SeoComponent
        title="Service Mesh Patterns"
        description="Service Mesh Patterns - Expect more from your infrastructure"
        schemaMarkup={schema}
      />
      <Layout>
        <Navbar />
        <Hero />
        <SectionWrapper>
          <div className="center under-construction">
            <img src={PatternsLogo} />
            <h1 className="center under-construction">Coming Soon...</h1>
            <h3 className="under-construction">
              See{" "}
              <a href="https://layer5.io/books/service-mesh-patterns">
                Service Mesh Patterns Book
              </a>
            </h3>
          </div>

          <Footer />
          {/* <Navbar />
        <Hero />
        <AboutBook />
        <Footer />  */}
        </SectionWrapper>
      </Layout>
    </>
  );
};

export default IndexPage;
