import React from "react";
// import PropTypes from "prop-types";
import PropTypes from "prop-types";

//import Styles
import { InputContainer, SearchBarContainer } from "../searchBar/SearchBar.styles";

const SearchBar = ({ search }) => {
  return (
    <SearchBarContainer>
      <InputContainer type="text" placeholder="Search" onChange={search} />
    </SearchBarContainer>
  );
};

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default SearchBar;
