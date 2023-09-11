// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';

const MasterLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-animate">
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
