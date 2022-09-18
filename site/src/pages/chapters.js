import React from "react";
import ChaptersPage from "../sections/Chapters";
import Layout from "../components/layout";
import SeoComponent from "../components/seo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Chapters = () => {
  return (
    <>
      <SeoComponent
        title="Service Mesh Patterns - Chapters and Topics"
        description="Topics in the Service Mesh Patterns book by chapter"
      />
      <Layout>
        <Navbar />
        <ChaptersPage />
        <Footer />
      </Layout>
    </>
  );
};

export default Chapters;
