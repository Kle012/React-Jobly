import React from "react";
import { Link } from "react-router-dom";

/** Show simple info about a company on the list
 * 
 * Rendered by CompanyList to show a 'card' for each company
 * 
 * CompanyList -> CompanyCard
 */

const CompanyCard = ({ name, handle, description, logoUrl }) => {
    return (
        <Link className='CompanyCard' to={`/companies/${handle}`}>
            <div className="card-body">
                <h4 className="card-title">
                    {name}
                    {logoUrl && <img src={logoUrl}
                        alt={name} />}
                </h4>
                <p>{description}</p>
            </div>
        </Link>
    )
}

export default CompanyCard;