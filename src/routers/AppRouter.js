import React from 'react';   // using ES6 syntax for React;  
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'   // found on reacttraining.com site
import createHistory from 'history/createBrowserHistory'; 

import MovieDashBoardPage from '../components/MovieDashBoardPage'; 
import SampleDashBoardPage from '../components/SampleDashBoardPage'; 
import AddMoviePage from '../components/AddMoviePage'; 
import EditMoviePage from '../components/EditMoviePage'; 

import NotFoundPage from '../components/NotFoundPage'; 
import LoginPage from '../components/LoginPage'; 
import PrivateRoute from './PrivateRoute'; 
import PublicRoute from './PublicRoute'; 

export const history = createHistory(); 

const AppRouter = () => (   // this is JSX;  <Route /> includes 2 props -- path & component;  
    /* change from BrowserRouter which has a built-in history component to Router where we can provide our our history prop  */ 
    <Router history={history}> 
        <div>   {/*  <div> needed if using more than one <Route />;  */}
            <Switch>     
                <PublicRoute path="/" component={LoginPage} exact={true}/>   {/* need exact stmt so it doesnt match /create & others */}
                <Route path="/sample" component={SampleDashBoardPage}/>   
                <PrivateRoute path="/dashboard" component={MovieDashBoardPage}/>   
                <PrivateRoute path="/create" component={AddMoviePage} />
                <PrivateRoute path="/edit/:id" component={EditMoviePage} />
                <Route component={NotFoundPage} />  
            </Switch>
        </div>
    </Router>
)

export default AppRouter; 
