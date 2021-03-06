import React,{useContext} from "react";
import { NavLink} from 'react-router-dom';
import "./styles/Navbar.css"
import UserContext from "./UserContext"

const  Navbar=()=>{
    //before auth, default loggedIn = true for dev
    const {storedUser} = useContext(UserContext);

if(storedUser){
    return(<div className="Navbar">
        <NavLink exact to="/" className="navbar-brand">
            Jobly
        </NavLink>
        <NavLink exact to="/companies" className="navbar-brand">
            Companies
        </NavLink>
        <NavLink exact to="/jobs" className="navbar-brand">
            Jobs
        </NavLink>
        <NavLink exact to="/profile" className="navbar-brand">
            Profile
        </NavLink>
        <NavLink exact to="/logout" className="navbar-brand">
            Log out
        </NavLink>        
    </div> )
}
else {
    return (
<div className="Navbar">
        <NavLink exact to="/" className="navbar-brand">
            Jobly
        </NavLink>
        <NavLink exact to="/login" className="navbar-brand">
            Log In or Sign Up
        </NavLink>
        
    </div>
    )
}
}

export default Navbar;