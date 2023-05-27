// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import heroPicture from "../assets/hero_picture.png";
import HeroImg from "../components/HeroImg";

const Hero = ({ children }) => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font min-h-[80vh]">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div>{children}</div>
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-extrabold text-white">
              Contribute to
              <br className="hidden lg:inline-block" /> the world of Open Source
            </h1>
            <p className="font-bold mb-8 leading-relaxed">
              Starter Hive is a platform that helps beginners to contribute to
              open source projects of remotely hiring organizations.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-purple-500 border-0 py-3 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg font-bold hover:translate-y-[-5px] transition-transform duration-300">
                Find Issues
              </button>
            </div>
          </div>
          {/* <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={heroPicture}
            />
          </div> */}
          <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6 gap-3 flex flex-wrap flex-row">
            <HeroImg />
            <HeroImg className="mt-36" />
            <HeroImg className="mt-[-9rem]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

Hero.propTypes = {
  children: PropTypes.element.isRequired,
};
