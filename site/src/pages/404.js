import * as React from "react";
import { Link } from "gatsby";
import SeoComponent from "../components/seo";
import Layout from "../components/layout";


//  CSS styles
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup for 404 page as a template for other pages and this page, too.
const NotFoundPage = () => {
  return (
    <>
      <SeoComponent title="What a mesh!" />
      <Layout>
        <h1>Page not found</h1>
        <p>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code style={codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </Layout>
    </>
  );
};

export default NotFoundPage;
