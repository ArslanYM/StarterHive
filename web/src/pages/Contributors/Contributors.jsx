// eslint-disable-next-line no-unused-vars
import React from "react";
import ContributorsList from "./ContributorsList";

const Contributors = () => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Our Team</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed italic md:text-base lg:text-xl">We extend our heartfelt gratitude to the exceptional contributors of our project. Your talent and dedication have made a significant impact on our success. Your innovative ideas and valuable insights have enriched our codebase and improved our software. We appreciate your collaborative spirit and commitment to the community. Thank you for being an invaluable part of our team!</p>
          </div>
          <ContributorsList/>
        </div>
      </section>
    </>
  );
};

export default Contributors;
