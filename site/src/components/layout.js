import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import FavIcon from "../assets/images/favicon.png";

const Layout = ({ children }) => {

  return (
    <>
      <Helmet>
        <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
        <link
          href="https://fonts.googleapis.com/css?family=Open%20Sans:300,400,500,600,700,800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
