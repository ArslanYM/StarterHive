// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import heroPicture from "../../assets/hero_picture.png";
import HeroImg from "../../components/Heroimg";

const Home = () => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font min-h-[80vh]">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 sm:ml-10 lg:pr-20 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className=" block title-font sm:text-5xl text-4xl mb-4 font-extrabold text-white">
              Contribute to the world of
              <p className="sm:inline-block  sm:ml-4 md:ml-0 text-yellow-500 hover:scale-110 transition-transform">
                Open Source
              </p>
            </h1>
            <p className="font-bold mb-8 leading-relaxed">
              Starter Hive is a platform that helps beginners to contribute to
              <p>open source projects of remotely hiring organizations.</p>
            </p>
            <div className="flex justify-center">
              <Link to="/issues">
                <button className="inline-flex text-white bg-purple-500 border-0 py-3 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg font-bold hover:translate-y-[-5px] transition-transform duration-300">
                  Find Issues
                </button>
              </Link>
            </div>
          </div>
          {/* <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={heroPicture}
            />
          </div> */}
          <div className="lg:max-w-md lg:w-full md:w-1/2 w-11/12 h-96gap-3 flex items-center justify-center">
            <div className="flex flex-col gap-3">
              <HeroImg
                imgSrc={
                  "https://user-images.githubusercontent.com/104521101/241361621-fcf0d93f-8cc4-41e3-afb5-cbfad6f25486.png"
                }
                className={"w-full h-full object-cover object-center"}
                altText={"logo"}
              />
              <HeroImg
                imgSrc={
                  "https://user-images.githubusercontent.com/104521101/241361628-b0543c0d-9531-4c9d-94ee-a4688384fb53.png"
                }
                className={"w-full h-full object-cover object-center"}
                altText={"logo"}
              />
            </div>
            <div className="flex flex-col gap-3 ml-5 mr-5">
              <HeroImg
                imgSrc={
                  "https://user-images.githubusercontent.com/104521101/241361627-02f6dece-11f7-405a-be9f-cc4ec060bcfa.png"
                }
                className={"w-full h-full object-cover object-center"}
                altText={"logo"}
              />
              <HeroImg
                imgSrc={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU"
                }
                className={"w-full h-full object-cover object-center"}
                altText={"logo"}
              />
              <HeroImg
                imgSrc={
                  "https://user-images.githubusercontent.com/104521101/241361625-7d32570f-c1f1-4620-84a0-f763e1dde741.png"
                }
                className={"w-full h-full object-cover object-center"}
                altText={"logo"}
              />
            </div>
            <div className="flex flex-col gap-3">
              <HeroImg
                imgSrc={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU"
                }
                className={"w-full h-full object-cover object-center"}
                altText={"logo"}
              />
              <HeroImg
                imgSrc={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnCs__s5xhjECCz-_ejtemS2CzXLbdO_DNBA&usqp=CAU"
                }
                className={"w-full h-full object-cover object-center"}
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
