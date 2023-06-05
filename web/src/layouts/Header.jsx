// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

import logo from "../assets/hive.svg"
import Switch from "../components/Switch/Switch";
import { ThemeContext } from "../Context/ThemeContext";


const Header = () => {
  const { handleTheme, theme } = useContext(ThemeContext)
  const location = useLocation();
  const path = location.pathname;
  //const active = true;
  return (
    <header className={`text-gray-400 ${theme.bg_Selected}  body-font flex-nowrap`}>
      <div className="container mx-auto flex flex-wrap p-5  flex-col w-full md:flex-row items-center justify-between">
        <nav className="flex  flex-wrap items-center text-base w-full justify-between md:width-unset md:justify-normal  ">
          <Link to="/" className={` px-1 py-1 md:px-3  rounded hover:${theme.text_Color} cursor-pointer md:font-bold ${path == "/" && `${theme.navBar_LinkColor}  `}`}>
            Home
          </Link>
          <Link to="/contributors" className={` px-1 py-1 md:px-3  rounded hover:${theme.text_Color} md:font-bold cursor-pointer ${path == "/contributors" && `${theme.navBar_LinkColor}  `}`}>
            Contributors
          </Link>
          <Link to="/docs" className={` px-1 py-1 md:px-3  rounded hover:${theme.text_Color} md:font-bold cursor-pointer ${path == "/docs" && `${theme.navBar_LinkColor}  `}`}>
            Docs
          </Link>
          <Link to="/issues" className={`hover:${theme.text_Color} cursor-pointer md:font-bold px-1 py-1 md:px-3 rounded ${path == "/issues" && `${theme.navBar_LinkColor}  `}`}>
            Find Issues
          </Link>
        </nav>
        <Link to="/" className="flex order-first  title-font font-medium items-center text-white  mb-4 md:mb-0">

          <span className={`${theme.text_Color} ml-3 text-xl  font-bold cursor-pointer`}>Starter Hive </span>
          <img src={logo} alt="Logo" className="ml-3 w-6" />

        </Link>
        <div className=" inline-flex ">
          <Switch handleTheme={handleTheme} checked={theme.checked} />
          <button className={` inline-flex ${theme.navBar_BtnColor} py-2 px-3 border border-purple-600 rounded-full focus:outline-none duration-300 
            hover:ring-2 hover:ring-purple-500 hover:ring-purple-500 transition-all ease-out duration-300 `}>
            <a href="https://github.com/ArslanYM/StarterHive" aria-label="github-link" target="_blank" rel="noreferrer" className="space-x-2 flex items-center">
              <span className="text-purple-600">GitHub</span>
              <FaGithub className={` text-2xl  ${theme.navBar_GitBtnIconColor}`} />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-purple-600" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
