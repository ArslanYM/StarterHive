import PropTypes from "prop-types";

const IssueItem = ({ title, description, url }) => {
  return (
    <div className="p-4 lg:w-1/3 md:w-1/2 sm:w-full">
      <div className="h-60 flex items-center border-gray-700 border p-4 rounded-lg hover:shadow-sm hover:shadow-purple-900 hover:border-gray-700 transition-all transform hover:scale-105">
       
        <div className="flex flex-col justify-around overflow-hidden h-60 ">
                  <h2 className="whitespace-no-wrap overflow-hidden line-clamp-3 text-white title-font text-xl font-extrabold">{title}</h2>
                  <p className=" whitespace-no-wrap overflow-hidden line-clamp-3 text-white font-light text-s ">{description}</p>
          <a
            target="_blank"
            rel="noreferrer"
            href={url}
            className="text-purple-500 hover:text-purple-600 text-base font-bold"
          >
            Go to Issue
          </a>
        </div>
      </div>
    </div>
  );
};

export default IssueItem;
IssueItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
};
