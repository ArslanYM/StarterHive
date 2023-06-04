// eslint-disable-next-line no-unused-vars
import React from "react";
import ContributorsList from "./ContributorsList";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const Contributors = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <section
        className="text-gray-400 
       body-font min-h-screen"
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className={`sm:text-3xl text-2xl font-bold title-font mb-4 ${theme.text_Color} `}>
              {" "}
              A{" "}
              <span className="text-4xl text-yellow-400 font-extrabold animate-pulse">
                Big Thanks
              </span>{" "}
              to all our Contributors.
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed italic md:text-base lg:text-xl">
              We extend our heartfelt gratitude to the exceptional contributors
              of our project. Your talent and dedication have made a significant
              impact on our success. Your innovative ideas and valuable insights
              have enriched our codebase and improved our software. We
              appreciate your collaborative spirit and commitment to the
              community.
            </p>
          </div>
          <ContributorsList />
        </div>
      </section>
    </>
  );
};

export default Contributors;
