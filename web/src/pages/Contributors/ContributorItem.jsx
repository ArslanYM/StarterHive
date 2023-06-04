import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const ContributorItem = ({ image, name, url }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg hover:shadow-sm hover:shadow-purple-900 hover:border-gray-700 transition-all transform hover:scale-105">
        <img
          alt="team"
          className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4 transition duration-300 transform hover:scale-125"
          src={image}
        />
        <div className="flex-grow">
          <h2 className={`${theme.text_Color} title-font text-lg font-medium`}>{name}</h2>
          <a
            target="_blank"
            rel="noreferrer"
            href={url}
            className={`text-gray-600 hover:${theme.text_Color}  text-base`}
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
