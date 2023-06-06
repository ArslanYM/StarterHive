// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

import logo from "../assets/hive.svg";
import Switch from "../components/Switch/Switch";
import { ThemeContext } from "../Context/ThemeContext";

const Header = () => {
  const { handleTheme, theme } = useContext(ThemeContext);
  const location = useLocation();
  const path = location.pathname;
  //const active = true;
  return (
    <header
      className={`text-gray-400 ${theme.bg_Selected}  body-font flex-nowrap`}
    >
      <div className="container flex flex-col flex-wrap items-center justify-between w-full p-5 mx-auto md:flex-row">
        <nav className="flex flex-wrap items-center justify-between w-full text-base md:width-unset md:justify-normal ">
          <Link
            to="/"
            className={` px-1 py-1 md:px-3  rounded hover:${
              theme.text_Color
            } cursor-pointer md:font-bold ${
              path == "/" && `${theme.navBar_LinkColor}  `
            }`}
          >
            Home
          </Link>
          <Link
            to="/contributors"
            className={` px-1 py-1 md:px-3  rounded hover:${
              theme.text_Color
            } md:font-bold cursor-pointer ${
              path == "/contributors" && `${theme.navBar_LinkColor}  `
            }`}
          >
            Contributors
          </Link>
          <Link
            to="/docs"
            className={` px-1 py-1 md:px-3  rounded hover:${
              theme.text_Color
            } md:font-bold cursor-pointer ${
              path == "/docs" && `${theme.navBar_LinkColor}  `
            }`}
          >
            Docs
          </Link>
          <Link
            to="/issues"
            className={`hover:${
              theme.text_Color
            } cursor-pointer md:font-bold px-1 py-1 md:px-3 rounded ${
              path == "/issues" && `${theme.navBar_LinkColor}  `
            }`}
          >
            Find Issues
          </Link>
        </nav>
        <Link
          to="/"
          className="flex items-center order-first mb-4 font-medium text-white title-font md:mb-0"
        >
          <span
            className={`${theme.text_Color} ml-3 text-xl  font-bold cursor-pointer`}
          >
            Starter Hive{" "}
          </span>
          <img src={logo} alt="Logo" className="w-6 ml-3" />
        </Link>
        <div className="inline-flex ">
          <Switch handleTheme={handleTheme} checked={theme.checked} />
          <a
            href="https://github.com/ArslanYM/StarterHive"
            aria-label="github-link"
            target="_blank"
            rel="noreferrer"
            className={`p-2 hover:ring-2 rounded-full duration-300 ${theme.navBar_GitBtnIconBorder} ${theme.navBar_GitHover}  ${theme.navBar_BtnColor} flex items-center space-x-2`}
          >
            <FaGithub
              className={` text-2xl  ${theme.navBar_GitBtnIconColor}`}
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
