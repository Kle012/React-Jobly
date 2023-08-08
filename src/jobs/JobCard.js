import React from "react";

/** Show simple info about a job 
 * 
 * Rendered by JobCardList to show a 'card' for each job
 * 
 * JobCardList -> JobCard
 */
const JobCard = ({ id, title, salary, equity, companyName }) => {
    return (
        <div className="card-body">
            <h4 className="card-title">
                {title}
            </h4>
            <p>{companyName}</p>
            <p><small>Salary: {salary}</small></p>
            <p><small>Equity: {equity}</small></p>
        </div>
    )
}

export default JobCard;