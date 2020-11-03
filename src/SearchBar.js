import React from "react";
import useFields from "./hooks/useFields"

const SearchBar=({submitSearch})=>{
//search bar for jobs and companies
    const [formData, handleChange, resetFormData] = useFields({search:""})

    const handleSubmit = (evt) =>{
        evt.preventDefault();
        const {search }= formData;
        submitSearch(search);
        resetFormData();
    }

    return(<>
    <form onSubmit={handleSubmit} >
        <input id="search" type="text" name="search" value={formData.search} onChange={handleChange} />
        <button data-testid="search-button">Submit</button>
    </form>
    </> )
}

export default SearchBar;