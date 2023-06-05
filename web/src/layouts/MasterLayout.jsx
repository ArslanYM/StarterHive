// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const MasterLayout = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <Header />
      <main className={theme.bg_Selected}>
        <Hero>{children}</Hero>
      </main>
      <Footer />
    </>
  );
};

export default MasterLayout;

MasterLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
