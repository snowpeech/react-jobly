import React, {useEffect, useState } from 'react';
import UserContext from "./UserContext";
import useLocalStorage from "./hooks/useLocalStorage";
import JoblyApi from "./JoblyApi"
import { decode } from "jsonwebtoken";


const UserProvider = ({children}) => {

    //used  in Routes: {setToken, storedUser,setStoredUser}
    //used in Navbar {storedUser}
    // const [currentUser,setCurrentUser] = useLocalStorage('user',null);

    //from App:
    // const [storedUser, setStoredUser]=useLocalStorage('user',null)
    const [storedUser, setStoredUser ]= useState(null) //changing storedUser to keep in here as state. not using local storage
  
  const [token, setToken] =useLocalStorage('_token',"");
// //pass setToken to login and signUp

  useEffect(()=>{
      console.log("USER PROVIDER USEEFFECT RUN token", token)
    // check if username stored in token is valid
    async function getUser(){
      try {
        let { username } = decode(token);
        let currentUser = await JoblyApi.getUser(username);
        // setStoredUser(currentUser);
        // console.log("APP.js storedUser",storedUser)
        // setStoredUser(JSON.stringify(currentUser));
        console.log("before",currentUser)
        setStoredUser(currentUser);
        console.log("after",storedUser)
        // console.log("currentUser! in App", storedUser);
      } catch (err) {
        setStoredUser(null);
      }
    }
    getUser();
    
  },[token,setStoredUser]);


    return (
        <UserContext.Provider value ={{setToken, storedUser,setStoredUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;