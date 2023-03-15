import React, { useRef, useState } from 'react'

const SearchJobType = ({onFullTimeFilterClick}) => {
  return (
    <div className="search-by-time">
      <input
        type="checkbox"
        id="job-type"
        onChange={onFullTimeFilterClick}
      ></input>
      <label className="job-type-checkbox" htmlFor="job-type"></label>
      <label htmlFor="job-type" className="job-type-label">
        Full Time <span>Only</span>
      </label>
    </div>
  );
}

export default SearchJobType
