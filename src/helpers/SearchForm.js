import React, { useState } from "react";
import './SearchForm.css';

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
        <div className="SearchForm mb-4">
            <form className="form-inline" onSubmit={handleSubmit}>
                <input
                    className="form-control form-control-lg flex-grow-1"
                    name="term"
                    placeholder="Look up with term"
                    value={term}
                    onChange={handleChange}
                />

                <button type="submit" className="btn btn-lag btn-primary">Search</button>
            </form>
        </div>
    )
}

export default SearchForm;