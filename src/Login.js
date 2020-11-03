import React from "react";
import {useHistory} from "react-router-dom";
import useFields from "./hooks/useFields"
import useLocalStorage from "./hooks/useLocalStorage";
import JoblyApi from "./JoblyApi";

const Login=()=>{
//show login form and will store signed-in token with successful login
const history = useHistory();
const [token, setToken] = useLocalStorage(`_token`,'')
const [formData, handleChange] = useFields({username:"", password:""})

const handleSubmit = async (evt) =>{
    evt.preventDefault();
    const {username, password} = formData;
    //submit login attempt with joblyapi
    console.log(username, password);
    let newToken= await JoblyApi.login(username,password)
    console.log(newToken)
    //set token in local storage.       
    setToken(newToken)
    //let's push to home page: Jobly, Welcome Back!(home page with if loggedIn)
    history.push("/")
}

return( <div>
    <h1>Log in</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username: </label>
                <input 
                id='username' 
                type='text'
                name='username'
                value={formData.username}
                onChange={handleChange} />

            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input 
                id='password' 
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange} /> 
            </div>
            <button>Log In</button>
        </form>
    </div>)
}

export default Login;