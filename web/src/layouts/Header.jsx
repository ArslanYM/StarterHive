// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { VscGithubAlt } from "react-icons/vsc";

import logo from "../assets/hive.svg";
import Switch from "../components/Switch/Switch";
import { ThemeContext } from "../Context/ThemeContext";

const Header = () => {
  const { handleTheme, theme } = useContext(ThemeContext);
  const [hamburgerView, sethamburgerView] = useState({
    view: "hidden",
    state: true,
  });
  const location = useLocation();
  const path = location.pathname;

  const handleClick = () => {
    const hamburguerViewState = hamburgerView.state ? "" : "hidden";
    sethamburgerView({
      ...Header,
      hamburgerView,
      view: hamburguerViewState,
      state: !hamburgerView.state,
    });
  };

  const MENU_ITEMS = [
    {
      title: "Home",
      path: '/'
    },
    {
      title: 'Contributors',
      path: '/contributors'
    },
    {
      title: 'Docs',
      path: '/docs'
    },
    {
      title: 'Find Issues',
      path: '/issues'
    }
  ]

  return (
    <header className={`text-gray-400 ${theme.bg_Selected}  body-font flex-nowrap `}>
      <nav className="md:mx-auto container ">
        <div className=" flex flex-wrap items-center justify-between  p-4 ">
          <div className=" md:hidden ">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none dark:text-gray-400  dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => handleClick()}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div>
            <Link to="/" className="flex order-first  title-font font-medium items-center text-white ">
              <span className={`${theme.text_Color}  text-xl  font-bold cursor-pointer`}>Starter Hive </span>
              <img src={logo} alt="Logo" className="ml-3 w-6" />
            </Link>
          </div>

          <div className="flex md:order-2">
            <Switch handleTheme={handleTheme} checked={theme.checked} />
            <a href="https://github.com/ArslanYM/StarterHive" aria-label="github-link" target="_blank" rel="noreferrer" className="space-x-2 flex items-center">
              <VscGithubAlt className={`p-0.5 hover:text-4xl text-3xl flex rounded-md duration-300 ${theme.navBar_GitBtnIconColor} ${theme.navBar_GitHover}`} />
            </a>
          </div>
          <div className={`  ${hamburgerView.view} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg md:flex-row  md:mt-0 md:border-0  dark:border-gray-700">
              {MENU_ITEMS.map((el) => (
                <Link key={el.path} to={el.path} className={`block px-1 py-1 md:px-3  rounded hover:${theme.text_Color} cursor-pointer font-bold ${path == `${el.path}` && `${theme.navBar_LinkColor}  `}`}>
                  {el.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
