// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ children }) => {
  return <>{children}</>;
};

export default Hero;

Hero.propTypes = {
  children: PropTypes.element.isRequired,
};
