import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsFooter from "../components/DetailsFooter";
import DetailsHeader from "../components/DetailsHeader";
import DetailsMain from "../components/DetailsMain";
import data from "../data.json";
const JobDetails = () => {
   const params = useParams();
   const id = Number.parseInt(params.id, 10);
  const [details, setDetails] = useState({});
  //console.log(details&&details);

  useEffect(() => {
    let JobDetails = getJobDetails();
    setDetails(JobDetails);
  }, [id,setDetails]);

  const getJobDetails = () => {
    let details = data.find((job) => job.id === id);
    return details
  };
  return (
    <main style={{ backgroundColor: "red" }}>
      {details && (
        <>
          <div className="container">
            <div className="job-details">
              <DetailsHeader details={details}></DetailsHeader>
              <DetailsMain detailsBody={details}></DetailsMain>
            </div>
            <DetailsFooter
              company={details.company}
              position={details.position}
            ></DetailsFooter>
          </div>
        </>
      )}
    </main>
  );
};

export default JobDetails;
