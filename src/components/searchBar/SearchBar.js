import React from "react";

//import Styles
import { SearchContainer, InputContainer } from "../searchBar/SearchBar.styles";

const SearchBar = () => {
  return (
    <SearchContainer>
      <InputContainer type="text" name="Search" placeholder="Search" />
    </SearchContainer>
  );
};

export default SearchBar;
