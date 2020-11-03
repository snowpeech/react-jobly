import React from "react";
import "./styles/JobCard.css"

const JobCard=({title, salary, equity,id,})=>{

return(<div className="JobCard"> 
<h4>{title}</h4>
<div>Salary: {salary}</div>

<div>Equity: {equity}</div>

<div>Id that will be used to apply link toggle: {id}</div>
</div> )
}

export default JobCard;