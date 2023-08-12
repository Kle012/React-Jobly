import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api";
import Loading from "../helpers/Loading";
import JobCardList from "../jobs/JobCardList";

/** Showing details on a company
 * 
 * Component for route /companies/:handle
 * 
 * Route -> CompanyDetails -> JobCardList
 */

const CompanyDetails = () => {
    const {handle} = useParams();
    const [company, setCompany] = useState(null);

    useEffect(() => {
        async function getCompany() {
            setCompany(await JoblyApi.getCompany(handle));
        }
        getCompany();
    }, [handle])

    if (!company) return <Loading />;

    return (
        <div className="CompanyDetails col-md-8 offset-md-2">
            <h6>{company.name}</h6>
            <p>{company.description}</p>
            <JobCardList jobs={company.jobs} />
        </div>
    )
}

export default CompanyDetails;