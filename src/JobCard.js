import React from "react";
import JoblyApi from "./JoblyApi"
import "./styles/JobCard.css"

const JobCard=({title, salary, equity,id,applied,handleApply})=>{
    const handleApplyClick=async (id) =>{
        await JoblyApi.applyToJob(id);
        handleApply();
    }

return(<div className="JobCard"> 
<h4>{title}</h4>
<div>Salary: ${salary.toLocaleString(undefined)}</div>

<div>Equity: {equity}</div>
{applied ? <button disabled>Applied </button> : <button onClick={()=>handleApplyClick(id)}>Apply {id}</button>}

</div> )
}

export default JobCard;