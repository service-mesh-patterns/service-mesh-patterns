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
        title="Service Mesh Patterns - Patterns in action"
        description="Patterns in action in the Service Mesh Patterns book"
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
