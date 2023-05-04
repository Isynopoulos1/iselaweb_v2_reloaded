import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//IMPORT DATA
import { projects } from "../../../assets/data";
//IMPORT STYLES
import { WorkContainer, Filters, MappedCards, SearchProjects } from "./Works.styles";

//IMPORT COMPONENTS
import Card from "../../elements/card/Card";
import BtnFilter from "../../btnFilter/BtnFilter";
import SearchBar from "../../searchBar/SearchBar";

const Works = () => {
  //hooks
  const [currentTag, setCurrentTag] = useState(null);

  //handle function
  const handleClick = tag => {
    setCurrentTag(tag);
  };

  //main render
  const navigate = useNavigate();

  const filtersList = projects.map(p => p.tags).flat(); // 44 filters with duplicates
  const filtersSet = new Set(filtersList);
  const filterArray = [...filtersSet];

  return (
    <WorkContainer>
      <Filters>
        {filterArray.map((item, i) => (
          <BtnFilter handleClick={() => handleClick(item)} tag={item} key={i} />
        ))}
      </Filters>
      <SearchProjects>
        <SearchBar />
      </SearchProjects>
      <MappedCards>
        {projects
          .filter(card => (currentTag ? card.tags.includes(currentTag) : true))
          .map((card, i) => (
            <Card onClick={() => navigate(card.href)} key={i} title={card.title} cover={card.cover} />
          ))}
      </MappedCards>
    </WorkContainer>
  );
};

export default Works;
