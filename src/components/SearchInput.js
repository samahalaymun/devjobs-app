import React from "react";
import InputWithIcon from "./InputWithIcon";
import searchIcon from "../assets/icon-search.svg";
const SearchInput = ({ placeHolder ,onChange}) => {
  return (
    <InputWithIcon
      onChangeInput={onChange}
      className="search-by-input"
      icon={searchIcon}
      placeholder={placeHolder}
    ></InputWithIcon>
  );
};

export default SearchInput;
