import React from 'react'
import { Link } from 'react-router-dom'
import JobCard from './JobCard';

const JobsContainer = ({jobs}) => {
  return (
    <div className="jobs-wrapper">
        {
            jobs&&jobs.map((job)=>{
                return (
                  <JobCard job={job}key={job.id}></JobCard>
                );
            })
        }
      
    </div>
  );
}

export default JobsContainer
