import React, {useEffect, useState} from "react";
import SearchBar from "./SearchBar"
import CompanyCard from "./CompanyCard"
import JoblyApi from "./JoblyApi"

const Companies=()=>{
    const initialState = []
    const [companies, setCompanies] = useState(initialState);
    const [query,setQuery] = useState({search:""});
    const searchCompanies = (term) =>{
        setQuery({search:term})
    }

    useEffect(()=>{

        async function getCompanies(){
            //populate companies list
            try {
                const res = await JoblyApi.request("companies",query);
                setCompanies(res.companies);
            } catch (e) {
                console.error(e)
            }
        }
        getCompanies();
    },[query])

/*List of all companies with search bar*/

return(<>
    <SearchBar submitSearch={searchCompanies}/>
    {companies ? companies.map((co) => 
    <CompanyCard 
        handle={co.handle}
        name={co.name}
        desc={co.description}
        logo_url={co.logo_url}
         />) : <div>Loading...</div>}
        
    </>)
    
}

export default Companies;
