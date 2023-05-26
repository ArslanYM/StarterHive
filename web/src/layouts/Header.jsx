// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaGithub } from "react-icons/fa";


const Header = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a className="mr-5 hover:text-white cursor-pointer">Home</a>
          <a className="mr-5 hover:text-white cursor-pointer">Contributors</a>
          <a className="mr-5 hover:text-white cursor-pointer">Docs</a>
          <a className="hover:text-white cursor-pointer">Find Issues</a>
        </nav>
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
          <span className="ml-3 text-xl xl:block lg:hidden cursor-pointer">
            Starter Hive✨
          </span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
  <button className="inline-flex bg-gray-800 py-1 px-3 focus:outline-none duration-300 hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
    <a
      href="https://github.com/ArslanYM/StarterHive"
      aria-label="github-link"
      target="_blank"
      rel="noreferrer"
      className="space-x-2 flex items-center"
    >
      <span>GitHub</span>
      <FaGithub className="text-2xl" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 ml-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </a>
  </button>
</div>

      </div>
    </header>
  );
};

export default Header;
