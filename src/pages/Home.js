import React, { useEffect, useState } from "react";
import JobsContainer from "../components/JobsContainer";
import LoadMore from "../components/LoadMore";
import SearchBar from "../components/SearchBar";
import data from "../data.json";
const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [displayedJobs, setDisplayedJobs] = useState([]);
  const [loadMore, setLoadMore] = useState(true);
  const [titleFilter, setTitleFilter] = useState(null);
  const [locationFilter, setLocationFilter] = useState(null);
  const [fullTimeFilter, setFullTimeFilter] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState([]);
 
  useEffect(() => {
    if (data) {
      setJobs(data);
      setDisplayedJobs(data.slice(0, 9));
      setFilteredJobs(data);
    }
  }, []);

  useEffect(() => {
    setDisplayedJobs(filteredJobs.slice(0, 9));
  }, [filteredJobs]);

  const loadMoreJobs = () => {
    let currentJobsLength = displayedJobs.length;
    setDisplayedJobs(filteredJobs.slice(0, currentJobsLength + 3));
    if (currentJobsLength == filteredJobs.length) {
      setLoadMore(false);
    }
  };

  const onTitleFilterChange = (e) => {
    setTitleFilter(e.target.value);
  };

  const onLocationFilterChange = (e) => {
    setLocationFilter(e.target.value);
  };

  const onFullTimeFilterClick = (e) => {
    setFullTimeFilter(e.target.checked);
  };

  const onFilterClicked = () => {
     console.log(titleFilter,locationFilter,fullTimeFilter);
    let filtered = [...jobs];
    filtered = filterByTitle(filtered);
    filtered = filterByLocation(filtered);
    filtered = filterByJobType(filtered);
    setFilteredJobs(filtered);
    if (filtered.length <= 9) {
      setLoadMore(false);
    } else {
      setLoadMore(true);
    }
  };

  const filterByTitle = (jobs) => {
    let filteredJobs = [];
    if (titleFilter) {
      filteredJobs = jobs.filter((job) => {
        return job.position.toLowerCase().includes(titleFilter.toLowerCase());
      });
    } else {
      filteredJobs = [...jobs];
    }
    return filteredJobs;
  };
  const filterByLocation = (jobs) => {
    let filteredJobs = [];
    if (locationFilter) {
      filteredJobs = jobs.filter((job) => {
        return job.location
          .toLowerCase()
          .includes(locationFilter.toLowerCase());
      });
    } else {
      filteredJobs = [...jobs];
    }
    return filteredJobs;
  };

  const filterByJobType = (jobs) => {
    let filteredJobs = [];
    if (fullTimeFilter) {
      filteredJobs = jobs.filter((job) => {
        return job.contract === "Full Time";
      });
    } else {
      filteredJobs = [...jobs];
    }
    return filteredJobs;
  };

  const freeInputs=()=>{
    setFullTimeFilter(false);
    setLocationFilter(null);
    setTitleFilter(null);
  }
  return (
    <main>
      <div className="container">
        <SearchBar
          onTitleFilterChange={onTitleFilterChange}
          onLocationFilterChange={onLocationFilterChange}
          onFullTimeFilterClick={onFullTimeFilterClick}
          onFilterClicked={onFilterClicked}
          freeInputs={freeInputs}
        ></SearchBar>
        <JobsContainer jobs={displayedJobs}></JobsContainer>
        {loadMore && <LoadMore onClick={loadMoreJobs}></LoadMore>}
      </div>
    </main>
  );
};

export default Home;
