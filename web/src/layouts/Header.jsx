// eslint-disable-next-line no-unused-vars
import React from 'react'

const Header = () => {
    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    <a className="mr-5 hover:text-white">Home</a>
                    <a className="mr-5 hover:text-white">Contributors</a>
                    <a className="mr-5 hover:text-white">Docs</a>
                    <a className="hover:text-white">Find Issues</a>
                </nav>
                <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">

                    <span className="ml-3 text-xl xl:block lg:hidden">Starter Hive✨</span>
                </a>
                <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                    <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Github
                    </button>
                </div>
            </div>
        </header>

    )
}

export default Header;
