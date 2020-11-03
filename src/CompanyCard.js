import React from "react";
import { Link } from 'react-router-dom';
import "./styles/CompanyCard.css";
import office_logo from "./office_logo_default.png"



const CompanyCard=({handle,name,desc, logo_url=office_logo})=>{
//card with company information on it and link to company info
return(<Link to={`/companies/${handle}`} className="CompanyCard-link">
    <div className="CompanyCard">
        <h3>{name}</h3>
        <p>{desc}</p>
        <img src={logo_url} alt="company logo" />
    </div>
</Link>)
}

export default CompanyCard;