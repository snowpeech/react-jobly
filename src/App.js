import React, { useEffect } from "react";
import {BrowserRouter} from 'react-router-dom';
// import { decode } from "jsonwebtoken";
import Navbar from "./Navbar"
import Routes from "./Routes"
// import useLocalStorage from "./hooks/useLocalStorage";
import './styles/App.css';
// import JoblyApi from "./JoblyApi"
// import UserContext from "./UserContext"
import UserProvider from "./UserProvider"

function App() {
//   const [storedUser, setStoredUser]=useLocalStorage('user',null)
  
//   const [token, setToken] =useLocalStorage('_token',"");
// //pass setToken to login and signUp

//   useEffect(()=>{
//     // check if username stored in token is valid
//     async function getUser(){
//       try {
//         let { username } = decode(token);
//         let currentUser = await JoblyApi.getUser(username);
//         // setStoredUser(currentUser);
//         // console.log("APP.js storedUser",storedUser)
//         setStoredUser(JSON.stringify(currentUser));
//         // console.log("currentUser! in App", storedUser);
//       } catch (err) {
//         setStoredUser(null);
//       }
//     }
//     getUser();

//   },[token,setStoredUser]);

  return (<BrowserRouter>
    <div className="App">
      <UserProvider >
      {/* <Navbar storedUser={storedUser}/>
      <Routes setToken = {setToken} storedUser={storedUser} setStoredUser={setStoredUser}/> */}
      <Navbar />
      <Routes />
      </UserProvider>
    </div>
  </BrowserRouter>
  );
}

export default App;
