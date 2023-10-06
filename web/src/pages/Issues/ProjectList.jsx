// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { BsBookmark, BsFillBookmarkCheckFill } from 'react-icons/bs';
import { ScaleLoader } from 'react-spinners';
import LanguageDropDown from './LanguageDropDown';
import ProjectCard from "./ListOfOrgs/ProjectCard";
import projectList from "./ListOfOrgs/listOfOrgs";

const ProjectList = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [bookMarkProjects, setBookMarkProjects] = useState();
  const [showBookMark, setShowBookMark] = useState(false);

  // Filter projects by language or bookmark
  function filterProject(project) {
    // If the user wants to see all projects
    if (selectedLanguages.length === 0 && !showBookMark) {
      return true;
    }

    // If the user wants to see only bookmarked projects
    if (selectedLanguages.length === 0 && showBookMark) {
      return bookMarkProjects.includes(project.projectLink);
    }

    const isTagsMatch = selectedLanguages.every(language => project.tags.includes(language));

    // If the user wants to see only bookmark projects of a specific language
    if (showBookMark) {
      return (
        isTagsMatch &&
        bookMarkProjects.includes(project.projectLink)
      );
    }

    // If the user wants to see only projects of a specific language
    return isTagsMatch;
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

  const getBookMarkProjects = () => {
    const bookMarkProject = localStorage.getItem('bookMarkProjects');
    if (bookMarkProject) {
      const array = JSON.parse(bookMarkProject);
      setBookMarkProjects(array);
    } else {
      setBookMarkProjects([]);
    }
  };

  useEffect(() => {
    getLanguages();
    getBookMarkProjects();
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-screen-2xl p-4 md:p-8 2xl:p-10">
      <div className="w-full my-4 p-4 flex items-center flex-wrap gap-4">
        <LanguageDropDown
          languages={languages}
          selectedLanguages={selectedLanguages}
          setSelectedLanguages={setSelectedLanguages}
        />
        <div
          onClick={() => setShowBookMark(!showBookMark)}
          className={`${showBookMark ? 'border-yellow-400' : 'border-gray-600'}
           text-white flex items-center gap-2 border-2  px-2 py-1 rounded-md cursor-pointer hover:border-yellow-400 duration-300`}
        >
          {showBookMark ? (
            <BsFillBookmarkCheckFill className="text-yellow-400" />
          ) : (
            <BsBookmark />
          )}
          <span className="opacity-60 text-sm">Bookmark: </span>
          <span>{bookMarkProjects?.length}</span>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        {<ScaleLoader loading={!bookMarkProjects} color="white" />}
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4 xl:grid-cols-3 2xl:gap-7.5 bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-animate place-items-center">
        {bookMarkProjects && projectList.map((project, key) => {
          if (!filterProject(project)) {
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
              bookMarkProjects={bookMarkProjects}
              getBookMarkProjects={getBookMarkProjects}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectList;
