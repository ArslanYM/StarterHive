// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import HeroImg from "../../components/HeroImage";
import { ThemeContext } from "../../Context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <section className="text-gray-400  body-font">
        <div className="container flex flex-col items-center min-h-screen px-5 py-6 md:py-10 mx-auto md:flex-row">
          <div className="flex flex-col items-center md:self-start md:pt-40 mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-20 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1
              className={`block mb-4 text-4xl font-extrabold ${theme.text_Color} title-font sm:text-5xl`}
            >
              Contribute to the world of{" "}
              <span className="text-yellow-400 transition-transform sm:inline-block sm:ml-4 md:ml-0 hover:scale-110">
                Open Source
              </span>
            </h1>
            <div className="mb-8 font-base md:font-bold leading-relaxed md:max-w-lg	">
              <p className=" inline ">
                Starter Hive is a platform that helps beginners to contribute to </p>
              <p className=" inline ">open source projects of remotely hiring organizations.</p>
            </div>
            <div className="flex justify-center">
              <Link to="/issues">
                <button
                  className={`inline-flex text-white ${theme.bg_DefaultBtn} border-0 py-3 px-8 focus:outline-none ${theme.bgHover_DefaultBtn} rounded text-lg font-bold hover:translate-y-[-5px] transition-transform duration-300`}
                >
                  Find Issues
                </button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center w-11/12 gap-3 lg:max-w-md lg:w-full md:w-1/2 ">
            <div className="flex flex-col gap-3 animate-floating">
              <HeroImg
                imgSrc={
                  "https://user-images.githubusercontent.com/104521101/241361621-fcf0d93f-8cc4-41e3-afb5-cbfad6f25486.png"
                }
                className={"w-full  object-cover object-center"}
                altText={"logo"}
              />
              <HeroImg
                imgSrc={
                  "https://user-images.githubusercontent.com/104521101/241361628-b0543c0d-9531-4c9d-94ee-a4688384fb53.png"
                }
                className={"w-full  object-cover object-center"}
                altText={"logo"}
              />
            </div>
            <div className="flex flex-col gap-3 ml-5 mr-5 animate-floating">
              <HeroImg
                imgSrc={
                  "https://user-images.githubusercontent.com/104521101/241361627-02f6dece-11f7-405a-be9f-cc4ec060bcfa.png"
                }
                className={"w-full  object-cover object-center"}
                altText={"logo"}
              />
              <HeroImg
                imgSrc={
                  "https://user-images.githubusercontent.com/104521101/241361625-7d32570f-c1f1-4620-84a0-f763e1dde741.png"
                }
                className={"w-full  object-cover object-center"}
                altText={"logo"}
              />
              <HeroImg
                imgSrc={
                  "https://user-images.githubusercontent.com/104521101/241567642-725e0f22-9d33-4908-a37b-63b0a7ae2f89.png"
                }
                className={"w-full  object-cover object-center"}
                altText={"logo"}
              />
            </div>
            <div className="flex flex-col gap-3 animate-floating">
              <HeroImg
                imgSrc={
                  "https://user-images.githubusercontent.com/104521101/241567644-8a196297-e534-408a-83d6-e8813fe355c4.png"
                }
                className={"w-full  object-cover object-center"}
                altText={"logo"}
              />
              <HeroImg
                imgSrc={
                  "https://user-images.githubusercontent.com/104521101/241567630-4ef028d9-2a9e-4cba-a021-2b8e2393e21c.png"
                }
                className={"w-full  object-cover object-center"}
                altText={"logo"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

Home.propTypes = {
  children: PropTypes.element.isRequired,
};
