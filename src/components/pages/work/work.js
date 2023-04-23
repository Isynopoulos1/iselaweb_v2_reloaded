import React from "react";
import { useParams } from "react-router-dom";

//IMPORT DATA
import { projects } from "../../../assets/data/Data";

//IMPORT STYLES
import { WorkContainer, Project, Context, Challenges, User, Process, Tools } from "../work/Work.styles";

const Work = () => {
  const { name } = useParams();
  const project =
    projects?.find(p => {
      return p.href === name;
    }) ?? {};

  return (
    <WorkContainer>
      <Project>{project.title}</Project>
      <Context>{project.context}</Context>
      <Challenges>{project.challenges}</Challenges>
      <User>{project.user}</User>
      <Process>{project.process}</Process>
      <Tools>{project.tools}</Tools>
    </WorkContainer>
  );
};
export default Work;
