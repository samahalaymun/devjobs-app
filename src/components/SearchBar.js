import React, { useEffect, useState } from 'react'
import SearchInput from './SearchInput';
import SearchJobType from './SearchJobType';
import SearchLocation from './SearchLocation';
import locationIcon from "../assets/icon-location.svg";
import MobileModalFilter from './MobileModalFilter';

const SearchBar = ({
  onTitleFilterChange,
  onLocationFilterChange,
  onFullTimeFilterClick,
  onFilterClicked,
  freeInputs,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleFilterClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  return (
    <div className="search-bar">
      {isModalOpen && (
        <MobileModalFilter
          onClick={handleFilterClick}
          onLocationFilterChange={onLocationFilterChange}
          onFullTimeFilterClick={onFullTimeFilterClick}
          onFilterClicked={onFilterClicked}
          freeInputs={freeInputs}
        ></MobileModalFilter>
      )}
      <SearchInput
        placeHolder={
          windowWidth <= 1100
            ? "Search by title..."
            : "Filter by title , companies,expertise..."
        }
        onChange={onTitleFilterChange}
      ></SearchInput>
      <SearchLocation
        onLocationFilterChange={onLocationFilterChange}
      ></SearchLocation>
      <SearchJobType
        onFullTimeFilterClick={onFullTimeFilterClick}
      ></SearchJobType>
      <button className="mobile-filter-btn" onClick={handleFilterClick}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
            fill="#6E8098"
            fillRule="nonzero"
          />
        </svg>
      </button>
      <div className="submit-form">
        <button className=" btn search-btn" onClick={onFilterClicked}>
          {windowWidth <= 700 ? <i class="fas fa-search"></i> : "search"}
        </button>
      </div>
    </div>
  );
};

export default SearchBar
