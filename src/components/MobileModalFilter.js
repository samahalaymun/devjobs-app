import React from 'react'
import SearchJobType from './SearchJobType';
import SearchLocation from './SearchLocation';

const MobileModalFilter = ({
  onClick,
  onLocationFilterChange,
  onFullTimeFilterClick,
  onFilterClicked,
  freeInputs,
}) => {
  return (
    <div className="mobile-modal-filter" onClick={onClick}>
      <div
        className="wrapper"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <SearchLocation
          onLocationFilterChange={onLocationFilterChange}
        ></SearchLocation>
        <div className="mobile-modal-bottom">
          <SearchJobType
            onFullTimeFilterClick={onFullTimeFilterClick}
          ></SearchJobType>
          <button
            className=" btn search-btn"
            onClick={() => {
              onFilterClicked();
              freeInputs();
              onClick();
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileModalFilter
