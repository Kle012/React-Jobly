import React, { useState } from "react";

/** Search Form
 * Appears on CompanyList for filtering
 * 
 * This component only renders the search form but does not actually do the searching
 * Calls searchFor function prop that runs in a parent to do the actual searching
 * 
 */

const SearchForm = ({ searchFor }) => {
    const [term, setTerm] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        searchFor(term.trim() || undefined);
        setTerm(term.trim());
    }

    const handleChange = e => {
        setTerm(e.target.value);
    }

    return (
        <div className="SearchFormDiv">
            <form className="SearchForm" onSubmit={handleSubmit}>
                <input
                    className="SearchForm-input"
                    name="term"
                    placeholder="Look up with term"
                    value={term}
                    onChange={handleChange}
                />

                <button className="search-btn">Search</button>
            </form>
        </div>
    )
}

export default SearchForm;