import React from "react";
import PropTypes from 'prop-types';


const ProjectCard = ({
  projectLink,
  logoLink,
  name,
  description,
  tags: propsTags,
  
}) => {
  const tags = propsTags.map((tag, key) => (
    <span
      key={key}
      className="inline-block px-2 py-1 mb-2 mr-2 text-xs font-medium text-white bg-blue-500 rounded-full"
    >
      {tag}
    </span>
  ));

  return (
    
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={projectLink}>
        <img rel="preload" loading="lazy"  className="rounded-t-lg" src={logoLink} alt="" />
    </a>
    <div className="p-5">
        <a href={projectLink}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <div className="mb-3">{tags}</div>
        <a target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
           Find Issues 
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  projectLink: PropTypes.string.isRequired,
  logoLink: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string), 
};