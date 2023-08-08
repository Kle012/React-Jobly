import React, { useEffect, useState } from "react";
import JoblyApi from "../api";
import SearchForm from "../helpers/SearchForm";
import CompanyCard from "./CompanyCard";
import Loading from "../helpers/Loading";

/** Show page with list of companies 
 * 
 * Loads companies from API
 * Re-loads filtered companies on submit from search form
 * 
 * Component for route /companies 
 * 
 */ 

const CompanyList = () => {
    const [companies, setCompanies] = useState(null);

    async function search(name) {
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
    }

    useEffect(() => {
        search();
    }, [])

    if (!companies) return <Loading />;

    return (
        <div className="CompanyList">
            <SearchForm searchFor={search} />
            {companies.length
            ? (
                <div className="CompanyList-list">
                    {companies.map(company => (
                        <CompanyCard
                            key={company.handle}
                            handle={company.handle}
                            name={company.name}
                            description={company.description}
                            logoUrl={company.logoUrl}
                        />
                    ))}
                </div>
            ) : (
                <p className="CompanyList-notFound">
                    Sorry, I can't find any companies with that name.
                </p>
            )}
        </div>
    )
}

export default CompanyList;