import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const ContributorItem = ({ image, name, url }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="relative overflow-hidden">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {/* Wrap the img element in an anchor tag */}
        <img
          alt="team"
          className="w-40 h-40 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full m-4 transition duration-300 transform hover:scale-125 hover:transform duration-300"
          src={image}
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-full hover:opacity-0 transition duration-300 transform hover:scale-125 w-full h-full"></div>
      </a>
    </div>
  );
};

export default ContributorItem;
ContributorItem.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
};
