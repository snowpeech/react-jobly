import React,{useContext} from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from "./Home";
import Companies from "./Companies"
import Company from "./Company"
import Jobs from "./Jobs"
import Login from "./Login"
import Profile from "./Profile"
import Logout from './Logout'
import UserContext from "./UserContext"

const Routes =()=>{
/* Home page is a simple welcome page
Companies lists companies (with search)
Company lists company details and related jobs
Jobs lists jobs (with search)
Login allows user to log in or sign up
Profile displays profile information + allows user to edit  */

const {setToken, storedUser,setStoredUser} = useContext(UserContext);

return(
<Switch>
    <Route exact path="/">
        <Home />
    </Route>

    <Route exact path="/companies">
    {storedUser ? <Companies /> : <Redirect to="/login" /> }
                
    </Route>
    <Route exact path="/companies/:handle">
    {storedUser ? <Company /> : <Redirect to="/login" /> }
    </Route>

    <Route exact path="/jobs">
       {storedUser ? <Jobs /> : <Redirect to="/login" /> }
    </Route>

    <Route exact path="/login" >
    {storedUser ? <Redirect to="/" /> : <Login setToken={setToken}/>}
        
    </Route>

    <Route exact path="/logout">
        {/* maybe have the settoken here and redirect to home */}
        <Logout setStoredUser={setStoredUser} setToken={setToken}/>
    </Route>

    <Route exact path="/profile">
    {storedUser ?  <Profile storedUser={storedUser} setStoredUser={setStoredUser}/>: <Redirect to="/" /> }
       
    </Route>

</Switch>
)
}
export default Routes;