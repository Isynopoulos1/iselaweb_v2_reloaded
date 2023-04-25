import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

//IMPORT DATA
import { projects } from "../../../assets/data";

//IMPORT COMPONENTS
import BtnFilter from "../../btnFilter/BtnFilter";

//IMPORT STYLES
import { WorkContainer, Project, Context, Challenges, User, Process, Tools, Tags, Video } from "../work/Work.styles";

const Work = () => {
  const { name } = useParams();
  const project =
    projects?.find(p => {
      return p.href === name;
    }) ?? {};

  const [filteredProjects, setFilteredProjects] = useState(projects);

  const HandleFilter = tag => {
    const filtered = projects.filter(project => project.tags.includes(tag));
    setFilteredProjects(filtered);
  };

  return (
    <WorkContainer>
      <BtnFilter />
      <Project>{project.title}</Project>
      <Context>{project.context}</Context>
      <Challenges>{project.challenges}</Challenges>
      <User>{project.user}</User>
      <Video src={project.video} autoPlay muted loop />
      <Process>{project.process}</Process>
      <Tools>{project.tools}</Tools>
    </WorkContainer>
  );
};
export default Work;
