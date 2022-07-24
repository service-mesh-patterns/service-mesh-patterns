import * as React from "react";
import SeoComponent from "../components/seo";
// import Hero from "../sections/Hero";


const IndexPage = () => {
  const schema= {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": "Service Mesh Patterns",
    "url": "http://service-mesh-patterns.github.io/",
    "logo": "https://service-mesh-patterns.github.io/images/service-mesh-pattern.png",
    "sameAs": [
      "https://github.com/service-mesh-patterns",
    ]
  };
  return (
    <>
      <SeoComponent title="Service Mesh Patterns" description="Service Mesh Patterns - Expect more from your infrastructure"
        schemaMarkup={schema} />
      <main>
        <h1>Service Mesh Patterns - Coming Soon....</h1>
        {/* <Navbar />
        <Hero />
        <AboutBook />
        <Footer /> */}
      </main>
    </>
  );
};

export default IndexPage;
