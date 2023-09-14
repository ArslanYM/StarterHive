import PropTypes from 'prop-types';
import Placeholder from "../../../assets/img-placeholder.jpg"
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({
  projectLink,
  logoLink,
  name,
  description,
  tags: propsTags,
}) => {


  const [issues, setIssues] = useState(null);

  async function getIssues() {
    const getLastTwoHeaders = (link) => link.split('/').slice(-2);
    const lastTwoHeaders = getLastTwoHeaders(projectLink);
    var orgName = lastTwoHeaders[0];
    var projectName = lastTwoHeaders[1];
    const response = await axios.get(`https://issuefinder.onrender.com/api/goodfirstissues/${orgName}/${projectName}`);
    setIssues(response.data.issues);
  }

  //console.log(issues);
  //at this point if you click on find issues for any project, it will log its good first issues ( need to fix the ./listoforgs to specify link exactly to a project.)



  const tags = propsTags.map((tag, key) => (
    <span
      key={key}
      className="inline-block px-2 py-1 mb-2 mr-2 text-xs font-medium text-white bg-gray-600 rounded-full"
    >
      {tag}
    </span>
  ));

  return (
    <div className="flex self-auto flex-col h-full max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700">
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
              Find Issues
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
};
