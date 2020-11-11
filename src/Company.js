import React,{useState,useEffect} from "react";
import {useParams} from 'react-router-dom';
import JoblyApi from './JoblyApi'
import JobCard from "./JobCard"

const Company=()=>{
//See details on a company. lists any related job postings
const {handle} = useParams();
console.log(handle)
const [company, setCompany] = useState()

useEffect(()=>{
    //update company if handle changes. also fetches on first render
    async function getCompany(handle){
        
        const res = await JoblyApi.getCompany(handle);
        setCompany(res)
        }    
        getCompany(handle);
    },[handle])


return(<div>
    {company?<div>
        <h1>{company.name}</h1>
        <div>{company.description}</div>
        <div>
        Number of Employees:{company.num_employees}
        </div>
        
{company.jobs.map(job=><JobCard title={job.title} salary={job.salary} equity={job.equity} id={job.id} key={job.id}/>)}

    </div> : <h1>Loading...</h1>}
    
</div>)
}

export default Company;