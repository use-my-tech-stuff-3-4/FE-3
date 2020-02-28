import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import PrivateRoute from './React2/utils/PrivateRoute'; 
import Login from './React1/LoginSkeleton'
import Register from './React1/RegisterSkeleton'
import Dashboard from './React1/DashboardSkeleton'
import NavBar from './React1/NavBar'

function App() {
  return (
    <div className="App">
      Use My Tech Stuff
      <NavBar/>
      {/* 
        TODO: 
        // 1. Build Login page
        // 2. Build PrivateRoute component that will display the Dashboard when authenticated
        // 3. Build Register page

        // ENDPOINTS: 

        <Route exact path="/" render={props => <Login />} />
        <Route path="/register" render={props => <Register />} /> 
        <PrivateRoute path="/dashboard" component={Dashboard} />
      */}

        <Route exact path="/" render={props => <Login />} />
        <Route path="/register" render={props => <Register />} /> 
        <PrivateRoute path="/dashboard" component={Dashboard} />
      
    </div>
  );
}

export default App;
