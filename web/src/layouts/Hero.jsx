// eslint-disable-next-line no-unused-vars
import heroPicture from "../assets/hero_picture.png";

const Hero = () => {
  return (
    <>
      <section className="flex flex-col items-center pt-12 md:pt-0 min-h-[80vh] px-5 mx-auto text-gray-400 bg-gray-900 body-font md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-4xl font-extrabold text-white title-font sm:text-5xl">
            Contribute to
            <br className="hidden lg:inline-block" /> the world of Open Source
          </h1>
          <p className="mb-8 font-bold leading-relaxed">
            Starter Hive is a platform that helps beginners to contribute to
            open source projects of remotely hiring organizations.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex px-8 py-3 text-lg font-bold text-white bg-purple-500 border-0 rounded focus:outline-none hover:bg-purple-600">
              Find Issues
            </button>
          </div>
        </div>
        <div className="w-5/6 lg:max-w-md lg:w-full md:w-1/2">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={heroPicture}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
