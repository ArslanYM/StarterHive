// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import projectList from "./ListOfOrgs/listOfOrgs";
import ProjectCard from "./ListOfOrgs/ProjectCard";
import LanguageDropDown from "./languageDropDown/languageDropDown";

const ProjectList = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [languages, setLanguages] = useState([]);

  // Filter projects by language
  function filterByLanguage(project) {
    if (selectedLanguage === 'All') {
      return true;
    }
    return project.tags.includes(selectedLanguage);
  }

  // Get all the languages/tags from the project list
  const getLanguages = () => {
    projectList.map((project) => {
      project.tags.map((tag) => {
        if (!languages.includes(tag)) {
          languages.push(tag);
        }
      });
    });
    setLanguages(languages);
  };

  useEffect(() => getLanguages());

  return (
    <div className="mx-auto min-h-screen max-w-screen-2xl p-4 md:p-8 2xl:p-10">
      <div className="w-full my-4 p-4">
        <LanguageDropDown
          languages={languages}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4 xl:grid-cols-3 2xl:gap-7.5 bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-animate place-items-center">
        {projectList.map((project, key) => {
          if (!filterByLanguage(project)) {
            return null;
          }
          return (
            <ProjectCard
              key={key}
              name={project.name}
              logoLink={project.imageSrc}
              projectLink={project.projectLink}
              description={project.description}
              tags={project.tags}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectList;
