import React from "react";
import ChaptersPage from "../sections/Chapters";
import Layout from "../components/layout";
import SeoComponent from "../components/seo";
import Footer from "../components/Footer/index";

const Chapters = () => {
  return (
    <>
      <SeoComponent
        title="Service Mesh Patterns - Chapters and Topics"
        description="Chapters and topics found in the Service Mesh Patterns book"
      />
      <Layout>
        <ChaptersPage />
        <Footer />
      </Layout>
    </>
  );
};

export default Chapters;
