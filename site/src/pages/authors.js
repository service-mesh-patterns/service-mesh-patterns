import * as React from "react";
import Author from "../sections/Authors";
import Layout from "../components/layout";
import SeoComponent from "../components/seo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Authors = () => {
  return (
    <>
      <SeoComponent
        title="Authors"
        description="Meet the authors of the Service Mesh Patterns book"
      />
      <Layout>
        <Navbar />
        <Author />
        <Footer />
      </Layout>
    </>
  );
};

export default Authors;