import * as React from "react";
import Layout from "../components/layout";
import SeoComponent from "../components/seo";
import Hero from "../sections/Hero";

import Navbar from "../sections/Navbar";

import Footer from "../components/Footer/index";
import About from "../sections/About";



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
        <About />
        <Footer />
        
      </Layout>
    </>
  );
};

export default IndexPage;