import React, {useEffect, useState} from "react";
import SearchBar from "./SearchBar"
import JobCard from "./JobCard"
import JoblyApi from "./JoblyApi"

const Jobs=()=>{
    const [jobs, setJobs]=useState([]);
    const [appliedIds,setAppliedIds] = useState([]);
    const [query,setQuery] = useState({search:""})
    const [toggleApply, setToggleApply]=useState(true);
    const searchJobs =(term)=>{
        setQuery({search:term})
    }

    const handleApply=()=>{
        setToggleApply(!toggleApply)
    }

    useEffect(()=>{
        async function getJobs(){
            //populate jobs list
            try {
                const res = await JoblyApi.request("jobs",query);
                setJobs(res.jobs);                               
            } catch (e) {
                console.error(e)
            }
        }
        getJobs();
    },[query])

    useEffect(()=>{
        async function getAppliedJobs(){
            //populate jobs list
            try {
                const user = window.localStorage.getItem("user") 
                const parsed=JSON.parse(user);
                const username = parsed.username   
                
                const resUser = await JoblyApi.getUser(username)
                const applied = resUser.jobs;
                let appliedIds=[];
                for(let obj of applied){
                    appliedIds.push(obj["id"])
                }
                setAppliedIds(appliedIds)
                
            } catch (e) {
                console.error(e)
            }
        }
        getAppliedJobs();
    },[toggleApply])

return(<>
<SearchBar submitSearch={searchJobs}/>
    {jobs ? jobs.map((job) => 
    <JobCard 
        title={job.title}
        salary={job.salary}
        equity={job.equity}
        key ={job.id}
        id ={job.id}
        handleApply={()=>handleApply()}
        applied={appliedIds.includes(job.id)}
         />) : <div>Loading...</div>}

</>)
}

export default Jobs;

//{title, salary, equity,id,}