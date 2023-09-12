import PropTypes from "prop-types";

const ContributorItem = ({ image, name, url }) => {
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg hover:shadow-sm hover:shadow-purple-900 hover:border-gray-700 transition-all transform hover:scale-105">
        <img
          alt="team"
          className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 transition duration-300 transform hover:scale-125"
          src={image}
        />
        <div className="flex-grow">
          <h2 className="text-white title-font text-lg font-medium">{name}</h2>
          <a
            target="_blank"
            rel="noreferrer"
            href={url}
            className="text-gray-600 hover:text-white text-base"
          >
            More Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContributorItem;
ContributorItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
};
