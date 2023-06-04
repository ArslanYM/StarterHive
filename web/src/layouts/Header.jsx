// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

import logo from "../assets/hive.svg"


const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const active = true;
  return (
    <header className="text-gray-400 bg-gradient-to-r from-gray-700 via-gray-900 to-black  body-font flex-nowrap">
      <div className="container mx-auto flex flex-wrap p-5  flex-col w-full md:flex-row items-center justify-between">
        <nav className="flex  flex-wrap items-center text-base w-full justify-between md:width-unset md:justify-normal  ">
          <Link to="/" className={` px-1 py-1 md:px-3  rounded hover:text-white cursor-pointer md:font-bold ${path == "/" && "bg-gray-800  "}`}>
            Home
          </Link>
          <Link to="/contributors" className={` px-1 py-1 md:px-3  rounded hover:text-white md:font-bold cursor-pointer ${path == "/contributors" && "bg-gray-800  "}`}>
            Contributors
          </Link>
          <Link to="/docs" className={` px-1 py-1 md:px-3  rounded hover:text-white md:font-bold cursor-pointer ${path == "/docs" && "bg-gray-800  "}`}>
            Docs
          </Link>
          <Link to="/issues" className={`hover:text-white cursor-pointer md:font-bold px-1 py-1 md:px-3 rounded ${path == "/issues" && "bg-gray-800  "}`}>
            Find Issues
          </Link>
        </nav>
        <Link to="/" className="flex order-first  title-font font-medium items-center text-white  mb-4 md:mb-0">

          <span className=" text-xl  font-bold cursor-pointer">Starter Hive </span> 
          <img src={logo} alt="Logo" className="ml-3 w-6" />

        </Link>
        <div className=" inline-flex ">
          <button className="inline-flex bg-gray-800 py-2 px-3 focus:outline-none duration-300 hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            <a href="https://github.com/ArslanYM/StarterHive" aria-label="github-link" target="_blank" rel="noreferrer" className="space-x-2 flex items-center">
              <span>GitHub</span>
              <FaGithub className="text-2xl" />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
