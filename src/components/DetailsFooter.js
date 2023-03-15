import React from "react";

const DetailsFooter = (props) => {
  return <div className="details-footer">
    <div className="footer-content">
        <div className="content-left">
            <h3>{props.position}</h3>
            <h5>{props.company}</h5>
        </div>
        <button className="btn">Apply Now</button>
    </div>
  </div>;
};

export default DetailsFooter;
