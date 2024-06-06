// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { VscGithubAlt, VscChromeClose } from 'react-icons/vsc';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { AiOutlineCoffee } from 'react-icons/ai';
import logo from '../assets/hive.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggletheme } from '../utils/Themeslice';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const dispatch = useDispatch()
  const [theme,settheme] = useState(true)
  const thmee = useSelector(store =>store.theme.toggletheme)

  const location = useLocation();
  const path = location.pathname;

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  const  handlechange = ( ) =>{
    settheme(!theme)
    dispatch(toggletheme(theme))
  }
  const MENU_ITEMS = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Contributors',
      path: '/contributors',
    },
    {
      title: 'Docs',
      path: '/docs',
    },
    {
      title: 'Projects',
      path: '/projects',
    },
  ];

  return (
    <header className={!thmee? "text-gray-400 bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-animate body-font flex-nowrap " :"text-gray-400 bg-white bg-animate body-font flex-nowrap " }>
      <nav className="md:mx-auto container "  >
        <div className=" flex flex-wrap items-center justify-between  p-4 ">
          <div className=" md:hidden ">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-400 rounded-lg md:hidden focus:outline-none focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => toggleDrawer()}
            >
              <span className="sr-only">Toggle menu</span>
              {isDrawerOpen ? (
                <VscChromeClose className="w-6 h-6" />
              ) : (
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
          <div>
            <Link
              to="/"
              className="flex order-first  title-font font-medium items-center text-white "
            >
              <span className={!thmee ? "text-white text-xl  font-bold cursor-pointer" : "text-black text-xl  font-bold cursor-pointer"}>
                Starter Hive{' '}
              </span>
              <img src={logo} alt="Logo" className="ml-3 w-6" />
            </Link>
          </div>

          <div className="flex md:order-2 gap-3">
          <DarkModeSwitch 
          onChange={handlechange}
          
          checked={theme}
          size={20}/>
            <a
              href="https://github.com/ArslanYM/StarterHive"
              aria-label="github-link"
              target="_blank"
              rel="noreferrer"
              className=" space-x-2 flex items-center  w-8 justify-center"
            >
              <VscGithubAlt className={!thmee ? "p-0.5 hover:text-3xl text-2xl flex rounded-md duration-300 text-white" : "p-0.5 hover:text-3xl text-2xl flex rounded-md duration-300 text-black"} />
             
            </a>
           
            <a
              href="https://www.buymeacoffee.com/arslanymalik"
              aria-label="support-link"
              target="_blank"
              rel="noreferrer"
              className="space-x-2 flex items-center w-8 justify-center"
            >
              <AiOutlineCoffee className={!thmee ? "p-0.5 hover:text-3xl text-2xl flex rounded-md duration-300 text-white" : "p-0.5 hover:text-3xl text-2xl flex rounded-md duration-300 text-black"  }/>
            </a>
            
          </div>
          <div
            className={`  ${
              isDrawerOpen ? '' : 'hidden'
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 border-gray-700 md:p-0 mt-4 font-medium  rounded-lg md:flex-row  md:mt-0 md:border-0">
              {MENU_ITEMS.map((el) => (
                <Link
                  key={el.path}
                  to={el.path}
                  onClick={() => closeDrawer()}
                  className={`block px-1 my-1 md:mx-1 py-1 md:px-3 rounded cursor-pointer font-bold ${
                    path === el.path && 'bg-gray-800'
                  } hover:bg-gray-800`}
                >
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
