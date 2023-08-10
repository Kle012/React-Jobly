import React, { useEffect, useState } from "react";
import JoblyApi from "../api";
import Loading from "../helpers/Loading";
import SearchForm from "../helpers/SearchForm";
import JobCardList from "./JobCardList";

/** Show page with list of jobs
 * 
 * Loads jobs from API
 * Re-loads filtered jobs on submit from search form
 * 
 * JobList -> JobCardList -> JobCard
 * Component for route /jobs
 */

const JobList = () => {
    const [jobs, setJobs] = useState(null);

    async function search(title) {
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
    }

    useEffect(() => {
        search();
    }, [])

    if (!jobs) return <Loading />

    return (
        <div className="JobList col-md-8 offset-md-2">
            <SearchForm searchFor={search} />
            {jobs.length
                ? (
                    <JobCardList jobs={jobs} />
                ) : (
                    <p className="lead">
                        Sorry, I can't find any jobs with that title.
                    </p>
                )
            }
        </div>
    )
}

export default JobList;