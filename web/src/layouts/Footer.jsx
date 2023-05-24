// eslint-disable-next-line no-unused-vars
import React from 'react'
import {FaDiscord,FaGithub,FaTwitter} from 'react-icons/fa'
const Footer = () => {
    return (
        <footer className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">StarterHive</span>
                </a>
                <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2023 StarterHive —
                    <a href="https://twitter.com/ArsalanYmalik" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@ArslanYM</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a href="https://twitter.com/ArsalanYmalik" className="text-gray-400">
                        <FaTwitter className="text-2xl duration-300 hover:fill-sky-500" />
                    </a>
                    <a href="https://github.com/ArslanYM/StarterHive" className="ml-5 text-gray-400">
                        <FaGithub className="text-2xl duration-300 hover:fill-gray-600" />
                    </a>
                    <a href="https://discord.gg/QBwU8KaJ" className=" ml-5 text-gray-400">
                        <FaDiscord className="text-2xl duration-300 hover:fill-violet-500" /> 
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default Footer;
