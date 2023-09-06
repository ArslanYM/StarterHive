// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import projectList from "./ListOfOrgs/listOfOrgs";
import { ThemeContext } from "../../Context/ThemeContext";
import ProjectCard from "./ListOfOrgs/ProjectCard";

const ProjectList = () => {

  const { theme } = useContext(ThemeContext);


  return (

    <div className="mx-auto min-h-screen max-w-screen-2xl p-4 md:p-8 2xl:p-10">


      <div
        className={`grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4 xl:grid-cols-3 2xl:gap-7.5 ${theme.bg_Selected} items-center `}
      >
        {
          projectList.map((project, key) => {
            return (<ProjectCard
              key={key}
              name={project.name}
              logoLink={project.imageSrc}
              projectLink={project.projectLink}
              description={project.description}
              tags={project.tags}

            />);

          })


        }
      </div>

    </div>
  );
};

export default ProjectList;


