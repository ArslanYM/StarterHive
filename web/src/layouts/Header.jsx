// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header
      className="text-gray-400 bg-gray-900 body-font"
      style={{
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      }}
    >
<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="text-xl font-medium">Starter Hive✨</span>
        </div>
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto justify-between">
        <a className="hover:text-white cursor-pointer">Home</a>
          <a className="hover:text-white cursor-pointer">Contributors</a>
          <a className="hover:text-white cursor-pointer">Docs</a>
          <a className="hover:text-white flex items-center cursor-pointer">
            GitHub
            <FaGithub className="text-2xl ml-1" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
