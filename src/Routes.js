import React from "react";
import {Route, Switch} from 'react-router-dom';
import Home from "./Home";
import Companies from "./Companies"
import Company from "./Company"
import Jobs from "./Jobs"
import Login from "./Login"
import Profile from "./Profile"

const Routes =()=>{
/* Home page is a simple welcome page
Companies lists companies (with search)
Company lists company details and related jobs
Jobs lists jobs (with search)
Login allows user to log in or sign up?
Profile displays profile information + allows user to edit  */
return(
<Switch>
    <Route exact path="/">
        <Home />
    </Route>

    <Route exact path="/companies">
        <Companies />
    </Route>
    <Route exact path="/companies/:handle">
        <Company />
    </Route>

    <Route exact path="/jobs">
        <Jobs />
    </Route>

    <Route exact path="/login">
        <Login />
    </Route>

    <Route exact path="/profile">
        <Profile />
    </Route>

</Switch>
)
}
export default Routes;