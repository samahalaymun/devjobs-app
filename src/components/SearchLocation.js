import React from "react";
import InputWithIcon from "./InputWithIcon";
import locationIcon from "../assets/icon-location.svg"
const SearchLocation = ({ onLocationFilterChange }) => {
  return (
    <InputWithIcon
      onChangeInput={onLocationFilterChange}
      className="search-by-location"
      icon={locationIcon}
      placeholder="Filter by location..."
    ></InputWithIcon>
  );
};

export default SearchLocation;
