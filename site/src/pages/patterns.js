import React from "react";
import PatternsPage from "../sections/Patterns";
import Layout from "../components/layout";
import SeoComponent from "../components/seo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Patterns = () => {
  return (
    <>
      <SeoComponent
        title="Service Mesh Patterns - Design Patterns in-Action"
        description="Learn cloud native patterns by doing"
      />
      <Layout>
        <Navbar />
        <PatternsPage />
        <Footer />
      </Layout>
    </>
  );
};

export default Patterns;
