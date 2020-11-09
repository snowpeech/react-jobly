import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

const Logout=({setStoredUser, setToken})=>{
    useEffect(()=>{
        setStoredUser(null);
        setToken("");
    },[setStoredUser,setToken])

//removes user from token. setLogout
return(<>Logging user out...
<Redirect to="/"/>
</>)
}

export default Logout;