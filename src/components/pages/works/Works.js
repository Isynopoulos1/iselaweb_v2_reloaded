import React from "react";
import { useNavigate } from "react-router-dom";

//IMPORT DATA
import { projects } from "../../../assets/data";
//IMPORT STYLES
import { WorkContainer, Filters, MappedCards } from "./Works.styles";

//IMPORT COMPONENTS
import Card from "../../elements/card/Card";
import BtnFilter from "../../btnFilter/BtnFilter";

const Works = () => {
  const navigate = useNavigate();

  const filtersList = projects.map(p => p.tags).flat(); // 44 filters with duplicates
  const filtersSet = new Set(filtersList);
  const filterArray = [...filtersSet];

  return (
    <WorkContainer>
      <Filters>
        {filterArray.map((item, i) => (
          <BtnFilter tag={item} key={i} />
        ))}
      </Filters>
      <MappedCards>
        {projects.map((card, i) => (
          <Card onClick={() => navigate(card.href)} key={i} title={card.title} cover={card.cover} />
        ))}
      </MappedCards>
    </WorkContainer>
  );
};

export default Works;
