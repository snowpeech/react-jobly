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
                console.log(res.companies); 
            } catch (e) {
                console.error(e)
            }
        }
        getCompanies();
    },[query])

/*List of all companies with search bar*/
// 1)  get all companies from api
//store as a result
// .map results into company cards

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

    // const getCompanies= async ()=>{
    //     //populate companies list
    //     try {
    //        const res =  await JoblyApi.request("companies")
    //        setCompanies([...res.companies]);
    //        console.log(companies)

    //     } catch (e) {
    //         console.error(e)
    //     }
    // }
    // getCompanies();