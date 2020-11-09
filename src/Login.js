import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import useFields from "./hooks/useFields"
import JoblyApi from "./JoblyApi";
import "./styles/Login.css"

const Login=({setToken})=>{
//show login or sign-up form and will store signed-in token with successful login
const history = useHistory();
const [formData,handleChange] = useFields({username:"", password:"", usernameNew:"",passwordNew:"", first_name:"",last_name:"",email:""})
const [showLogin,setShowLogin]=useState(true);

const handleLogin = async (evt) =>{
    evt.preventDefault();
    const {username, password} = formData;
    let _token= await JoblyApi.login(username,password);
    setToken(_token);
    history.push("/")
}

const handleSignup = async (evt) =>{
    evt.preventDefault();
    const {usernameNew, passwordNew, first_name,last_name, email} = formData;
    let _token= await JoblyApi.signup(usernameNew,passwordNew,first_name,last_name, email);
    setToken(_token);
    history.push("/")
}

const toggleForm = ()=>{
    setShowLogin(!showLogin)
}
const signUpClasses=`Login ${ showLogin ? "dead" : "live"}`;
const logInClasses=`Login ${ showLogin ? "live" : "dead"}`;
const loginForm=<div>
<form onSubmit={handleLogin}>
<h2>Log in</h2>
    <div>
        <label htmlFor="username">Username: </label>
        <input 
        id='username' 
        type='text'
        name='username'
        value={formData.username}
        onChange={handleChange} 
        required/>
    </div>
    <div>
        <label htmlFor="password">Password: </label>
        <input 
        id='password' 
        type='password'
        name='password'
        value={formData.password}
        onChange={handleChange} 
        required/> 
    </div>
    <button>Log In</button>
</form>
</div>
const signupForm=<div>
<form onSubmit={handleSignup}>
    <h2>Sign Up!</h2>
        <div>
            <label htmlFor="usernameNew">Username: </label>
            <input 
            id='usernameNew' 
            type='text'
            name='usernameNew'
            value={formData.usernameNew}
            onChange={handleChange} 
            required/>

        </div>
        <div>
            
            <label htmlFor="passwordNew">Password: </label>
            <input 
            id='passwordNew' 
            type='password'
            name='passwordNew'
            value={formData.passwordNew}
            onChange={handleChange} 
            required/> 
            <br/>
            <span className="Login-detail">Must be at least 5 characters long</span>
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
        <button>Sign up</button>
    </form>
</div>

return(<> 
<button onClick={toggleForm} className={logInClasses}> Log In</button >  <button onClick={toggleForm} className={signUpClasses}>Sign Up</button>
{showLogin ? loginForm : signupForm}

    </>)
}

export default Login;