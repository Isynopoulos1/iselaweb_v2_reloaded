import React from "react";
import { useParams } from "react-router-dom";

//IMPORT DATA
import { projects } from "../../../assets/data";

//IMPORT COMPONENTS
import BtnFilter from "../../btnFilter/BtnFilter";

//IMPORT STYLES
import { WorkContainer, Project, Context, Challenges, User, Process, Tools, Video } from "../work/Work.styles";

const Work = () => {
  // HOOKS AND VARIABLES
  const { name } = useParams();
  const project = projects?.find(p => p.href === name) ?? {};

  // HANDLE FUNCTIONS
  console.log(project.tags);

  // RENDER FUNCTION
  const renderTags = () => {
    return project.tags.map((tag, i) => <BtnFilter key={i} tag={tag} />);
  };

  // MAIN RENDER
  return (
    <WorkContainer>
      {renderTags()}
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
