import PropTypes from 'prop-types';
import Placeholder from "../../../assets/img-placeholder.jpg"
import axios from 'axios';
import { useState } from 'react';
import { BsBookmark, BsFillBookmarkCheckFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({
  projectLink,
  logoLink,
  name,
  description,
  tags: propsTags,
  bookMarkProjects,
  getBookMarkProjects,
}) => {

  const navigate = useNavigate();
  const [issues, setIssues] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(
    bookMarkProjects.includes(projectLink)
  );

  const getIssues = async () => {
    setIsLoading(true)
    console.log("Finding Issues for link : " + projectLink);
    const getLastTwoHeaders = (link) => link.split('/').slice(-2);
    const lastTwoHeaders = getLastTwoHeaders(projectLink);
    var orgName = lastTwoHeaders[0];
    var projectName = lastTwoHeaders[1];
    const response = await axios.get(`https://issuefinder.onrender.com/api/goodfirstissues/${orgName}/${projectName}`);
    const data = response.data;
    setIssues(data.issues);
    setIsLoading(false);
     navigate('/issues', { state: { issues: data.issues } });
  }


  const tags = propsTags.map((tag, key) => (
    <span
      key={key}
      className="inline-block px-2 py-1 mb-2 mr-2 text-xs font-medium text-white bg-gray-600 rounded-full"
    >
      {tag}
    </span>
  ));

  const handleClick = () => {
    setIsBookmarked(!isBookmarked);

    // If the project is already bookmarked, remove it from the list
    if (isBookmarked) {
      let bookMarkProjects = JSON.parse(
        localStorage.getItem('bookMarkProjects')
      );

      bookMarkProjects = bookMarkProjects.filter(
        (project) => project !== projectLink
      );
      localStorage.setItem(
        'bookMarkProjects',
        JSON.stringify(bookMarkProjects)
      );
      getBookMarkProjects(); // Update the bookmark list
      return;
    }

    // If the project is not bookmarked, add it to the list
    if (!isBookmarked) {
      let bookMarkProjects = JSON.parse(
        localStorage.getItem('bookMarkProjects')
      );
      if (bookMarkProjects === null) {
        bookMarkProjects = [projectLink];
      } else {
        bookMarkProjects.push(projectLink);
      }
      localStorage.setItem(
        'bookMarkProjects',
        JSON.stringify(bookMarkProjects)
      );
      getBookMarkProjects(); // Update the bookmark list
      return;
    }
  };

  return (
    <div className="flex self-auto flex-col h-full w-96 max-w-full border rounded-lg shadow bg-gray-800 border-gray-700 relative">
      <div
        className="absolute text-2xl right-2 top-2 text-yellow-400 cursor-pointer"
        onClick={handleClick}
      >
        {isBookmarked ? <BsFillBookmarkCheckFill /> : <BsBookmark />}
      </div>
      <a href={projectLink}>
        <img
          rel="preload"
          loading="lazy"
          className="h-28 overflow-hidden object-scale-down mx-auto w-full rounded-t-lg"
          src={logoLink}
          alt=""
          onError={(e) => {
            e.target.className = "bg-white h-28 overflow-hidden object-scale-down mx-auto w-full rounded-t-lg"
            e.target.src = Placeholder
          }}
        />
      </a>
      <div className="grid grid-cols-1 h-full p-5">
        <a href={projectLink}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-400">{description}</p>
        <div className="mb-3">{tags}</div>
        <div>
          <button onClick={getIssues}>
            <a
              target="_blank"
              rel="noreferrer"
              className="issue-btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              {
                isLoading ?
                  "Loading..." :
                  "Find Issues"
              }
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  projectLink: PropTypes.string,
  logoLink: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  bookMarkProjects: PropTypes.arrayOf(PropTypes.string),
  getBookMarkProjects: PropTypes.func,
};
