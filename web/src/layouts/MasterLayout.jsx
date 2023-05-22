// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";

const MasterLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Hero>{children}</Hero>
      <Footer />
    </>
  );
};

export default MasterLayout;

MasterLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
