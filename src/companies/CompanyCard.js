import React from "react";
import { Link } from "react-router-dom";
import './CompanyCard.css';

/** Show simple info about a company on the list
 * 
 * Rendered by CompanyList to show a 'card' for each company
 * 
 * CompanyList -> CompanyCard
 */

const CompanyCard = ({ name, handle, description, logoUrl }) => {
    
    return (
        <Link className='CompanyCard card' to={`/companies/${handle}`}>
            <div className="card-body">
                <h6 className="card-title">
                    {name}
                    {logoUrl && <img src={logoUrl} alt={name} className="float-right ml-5"/>}
                </h6>
                <p><small>{description}</small></p>
            </div>
        </Link>
    )
}

export default CompanyCard;