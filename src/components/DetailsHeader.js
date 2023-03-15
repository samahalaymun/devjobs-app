import React from 'react'

const DetailsHeader = ({ details }) => {
  return (
    <div className="details-header">
      <div className="job-contact">
        <div
          className="job-logo"
          style={{ backgroundColor: details.logoBackground }}
        >
          <img src={details.logo} />
        </div>
        <div className="job-company">
          <h1>{details.company}</h1>
          <p>{details.website}</p>
        </div>
      </div>
      <div className=" company-site">
        <button className="btn">Company Site</button>
      </div>
    </div>
  );
};

export default DetailsHeader
