import React from "react";
import { useParams } from "react-router-dom";

//IMPORT DATA
import { projects } from "../../../assets/data/Data";

//IMPORT STYLES
import { WorkContainer } from "../work/Work.styles";

//IMPORT COMPONENTS
import Card from "../../elements/card/Card";

const Work = () => {
  const { name } = useParams();

  return <WorkContainer>{projects.find(p => projects.href === name)}</WorkContainer>;
};

export default Work;
