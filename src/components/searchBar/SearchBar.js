import React, { useState } from "react";
import { projects } from "../../assets/data";

//import Styles
import { InputContainer, SearchBarContainer } from "../searchBar/SearchBar.styles";

const SearchBar = () => {
  //hooks
  const [search, setSearch] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);

  //handle function
  const handleSearch = e => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);
    const filtered = projects.filter(p => p.title.toLowerCase().includes(searchTerm));
    setFilteredProjects(filtered);
  };

  // render
  return (
    <SearchBarContainer>
      <InputContainer type="text" placeholder="Search" onChange={handleSearch} />
      {filteredProjects.map(p => (
        <div key={p.id}>{p.title}</div>
      ))}
    </SearchBarContainer>
  );
};

export default SearchBar;
