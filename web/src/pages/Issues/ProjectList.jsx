import React from 'react';
import projectList from './ListOfOrgs/listOfOrgs';
import ProjectCard from './ListOfOrgs/ProjectCard';

const ProjectList = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-animate flex flex-col items-center justify-center">
      <input
        type="text"
        placeholder="Search"
        className="w-50 h-10 px-5 pr-10 text-sm bg-white border-2 border-gray-300 rounded-full focus:outline-none"
        onChange={handleChange}
      />
      <div className="mt-4 mx-auto p-4 md:p-8 2xl:p-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4 xl:grid-cols-3 2xl:gap-7.5 bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-animate items-center">
          {projectList.map((project, key) => {
            if (
              project.tags.find((tag) =>
                tag.toLowerCase().includes(searchTerm.toLowerCase())
              )
            ) {
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
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
