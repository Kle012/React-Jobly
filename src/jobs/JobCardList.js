import React from "react";
import JobCard from "./JobCard";

/** Show list of job cards
 * 
 * Rendered by JobList and CompanyDetails to list jobs.
 * 
 * Joblist -> JobCardList -> JobCard
 * CompanyDetails -> JobCardList -> JobCard
 */

const JobCardList = ({ jobs, apply }) => {
    return (
        <div className="JobCardList">
            {jobs.map(job => (
                <JobCard
                    key={job.id}
                    id={job.id}
                    title={job.title}
                    companyName={job.companyName}
                    salary={job.salary}
                    equity={job.equity}
                />
            ))}
        </div>
    )
}

export default JobCardList; 