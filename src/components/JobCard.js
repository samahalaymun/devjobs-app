import React from 'react'
import { Link } from 'react-router-dom';

const JobCard = ({job}) => {
   const icon=job.logo
  return (
    <Link to={`jobs/${job.id}`}>
      <div className="card">
        <div
          className="img-wrapper"
          style={{ backgroundColor: `${job.logoBackground}` }}
        >
          <img src={job.logo} />
        </div>
        <div className="time-wrapper">
          <span className="post-time">{job.postedAt} </span>
          <span className="dot"></span>
          <span className="job-type">{job.contract}</span>
        </div>
        <h2 className="job-position">{job.position}</h2>
        <span className="company">{job.company}</span>
        <h4 className="location">{job.location}</h4>
      </div>
    </Link>
  );
}

export default JobCard
