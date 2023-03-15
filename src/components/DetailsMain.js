import React, { useEffect, useState } from "react";

const DetailsMain = ({ detailsBody }) => {
  const [requirements, setRequirements] = useState(null);
  const [role, setRole] = useState(null);
  console.log(detailsBody);
  useEffect(() => {
    if (detailsBody) {
      setRequirements(detailsBody?.requirements);
      setRole(detailsBody?.role);
    }
  }, [detailsBody]);
  return (
    <main>
      {detailsBody && (
        <div className="job-details-main">
          <div className="job-details-main-top">
            <div className="main-top-info">
              <p className="top-info-posted">
                {detailsBody.postedAt}
                <span className="dot"></span>
                {detailsBody.contract}
              </p>
              <h3 className="top-info-position">{detailsBody.position}</h3>
              <h4 className="top-info-location">{detailsBody.location}</h4>
            </div>
            <button className="btn">Apply Now</button>
          </div>
          <div className="job-details-main-body">
            <p className="main-body-description">{detailsBody.description}</p>
            {requirements && (
              <div className="main-body-requirements">
                <h3>Requirements</h3>
                <p>{requirements.content}</p>
                <ul>
                  {requirements.items.map((item) => {
                    return (
                      <div className="list-item">
                        <span className="list-oval"></span> <li>{item}</li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            )}
            {role && (
              <div className="main-body-role">
                <h3>What You Will Do</h3>
                <p>{role.content}</p>
                <ul>
                  {role.items.map((item,index) => {
                    return (
                      <div className="list-item">
                        <span className="list-number">{index+1}</span> <li>{item}</li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default DetailsMain;
