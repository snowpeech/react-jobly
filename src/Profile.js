import React from "react";
// import {useHistory} from 'react-router-dom'
import useFields from "./hooks/useFields"
import JoblyApi from "./JoblyApi";

const Profile=( {storedUser, setStoredUser})=>{
//view & edit profile page
// const history = useHistory();
let parsedUser=JSON.parse(storedUser); // not entirely sure how to fix this. Getting a CORS issue here.
//Uncaught SyntaxError: Unexpected token o in JSON at position 1 for this line... I think it's because I'm getting parsed user from stored user, which is changing because I am using setStoredUser
const appliedJobs = parsedUser.jobs
const [formData,handleChange] = useFields({first_name:parsedUser.first_name,last_name:parsedUser.last_name,email:parsedUser.email, photo_url:parsedUser.photo_url, password:""})
                
// fill form
const handleSubmit=async (evt)=>{
    evt.preventDefault();
    const {password, first_name, last_name, email, photo_url}=formData
    const {username} = parsedUser;
    let updatedUser = await JoblyApi.editProfile(username, password, first_name, last_name, email, photo_url);
    setStoredUser(updatedUser);
}

return(<>
<form onSubmit={handleSubmit}>
    <h1>Profile</h1>
        <div>
            <label htmlFor="username">Username: </label>
            <span>{parsedUser.username}</span>
        </div>
    
        <div>
            <label htmlFor="first_name">First Name: </label>
            <input 
            id='first_name' 
            type='text'
            name='first_name'
            value={formData.first_name}
            onChange={handleChange} /> 
        </div>
        <div>
            <label htmlFor="last_name">Last Name: </label>
            <input 
            id='last_name' 
            type='text'
            name='last_name'
            value={formData.last_name}
            onChange={handleChange} /> 
        </div>
        <div>
            <label htmlFor="email">Email: </label>
            <input 
            id='email' 
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange} /> 
        </div>
        <div>
            <label htmlFor="photo_url">Photo URL: </label>
            <input 
            id='photo_url' 
            type='text'
            name='photo_url'
            value={formData.photo_url}
            onChange={handleChange} /> 
        </div>
        <div>
            <label htmlFor="password">Re-type Password: </label>
            <input 
            id='password' 
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange} /> 
        </div>
    <button>Save Changes</button>
</form>

<div>
Jobs applied to:
    <ul>
{appliedJobs.map((job)=>(<li key={job.id}>{job.title}</li>))}

    </ul>
</div>
</>)
}

export default Profile;