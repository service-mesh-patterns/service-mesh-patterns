import * as React from "react";
import Author from "../sections/Authors";
import Layout from "../components/layout";
import SeoComponent from "../components/seo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutL5io from "../sections/AboutLayer5/index";

const Authors = () => {
  return (
    <>
      <SeoComponent
        title="Authors"
        description="Meet the authors of the Service Mesh Patterns book, Lee Calcote"
      />
      <Layout>
        <Navbar />
        <Author />
        <AboutL5io/>
        <Footer />
      </Layout>
    </>
  );
};

export default Authors;
