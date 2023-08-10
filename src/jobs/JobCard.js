import React, { useContext, useEffect, useState } from "react";
import UserContext from "../auth/UserContext";
import './JobCard.css';

/** Show simple info about a job 
 * 
 * Rendered by JobCardList to show a 'card' for each job
 * 
 * JobCardList -> JobCard
 */
const JobCard = ({ id, title, salary, equity, companyName }) => {
    const [hasApplied, applyToJob] = useContext(UserContext);
    const [applied, setApplied] = useState();

    useEffect(() => {
        setApplied(hasApplied(id));
    }, [id, hasApplied])

    const handleApply = async (e) => {
        if (hasApplied(id)) return;
        applyToJob(id);
        setApplied(true)
    }

    const formatSalary = (salary) => {
        const digit = [];
        const string = salary.toString();

        for (let i = string.length - 1; i >= 0; i--) {
            digit.push(string[i]);
            if (i > 0 && i % 3 === 0) digit.push(",");
        }

        return digit.reverse().join("");
    }

    return (
        <div className="JobCard card"> {applied}
            <div className="card-body">
                <h4 className="card-title">
                    {title}
                </h4>
                <p>{companyName}</p>
                {salary && <div><small>Salary: {formatSalary(salary)}</small></div>}
                {equity !== undefined && <div><small>Equity: {equity}</small></div>}
                <button
                    className="btn btn-danger font-weight-bold text-uppercase float-right"
                    onClick={handleApply}
                    disabled={applied}
                >
                    {applied ? "Applied" : "Apply"}
                </button>
            </div>
        </div>
    )
}

export default JobCard;