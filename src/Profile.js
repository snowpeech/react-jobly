import React, {useContext} from "react";
// import {useHistory} from 'react-router-dom'
import useFields from "./hooks/useFields"
import JoblyApi from "./JoblyApi";
import UserContext from "./UserContext"

const Profile=( )=>{
    const {setStoredUser, storedUser} = useContext(UserContext);
    
//view & edit profile page
const [formData,handleChange] = useFields(
    {first_name:storedUser.first_name,
    last_name:storedUser.last_name,
    email:storedUser.email, 
    photo_url:storedUser.photo_url, 
    password:""});
                
// fill form
const handleSubmit=async (evt)=>{
    evt.preventDefault();
    const {password, first_name, last_name, email, photo_url}=formData
    const {username} = storedUser;
    let updatedUser = await JoblyApi.editProfile(username, password, first_name, last_name, email, photo_url);
    setStoredUser(updatedUser);
    // if(updatedUser){alert("Successful update") } //obnoxios at the moment..
}

return(<>
<form onSubmit={handleSubmit}>
    <h1>Profile</h1>
        <div>
            <label htmlFor="username">Username: </label>
            <span>{storedUser.username}</span>
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
            onChange={handleChange} 
            required/> 
        </div>
    <button>Save Changes</button>
    
</form>
</>)
}

export default Profile;