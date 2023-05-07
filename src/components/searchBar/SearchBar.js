import React from "react";
//import Styles
import { InputContainer } from "../searchBar/SearchBar.styles";

const SearchBar = ({ handleSearch }) => {
  return <InputContainer placeholder="Search" onChange={handleSearch} />;
};

export default SearchBar;
