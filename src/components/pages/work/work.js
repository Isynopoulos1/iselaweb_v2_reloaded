import React from "react";
import { useParams } from "react-router-dom";

//IMPORT DATA
import { projects } from "../../../assets/data/Data";

//IMPORT STYLES
import { WorkContainer } from "../work/Work.styles";

const Work = () => {
  const { name } = useParams();
  const project =
    projects?.find(p => {
      return p.href === name;
    }) ?? {};

  return <WorkContainer>{project.title}</WorkContainer>;
};
export default Work;
