import React, { useState } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

// Components
import PrivateRoute from './React2/authentication/PrivateRoute'; 
import NavBar from './React1/NavBar'
import Login from './React2/authentication/Login'
import Register from './React2/authentication/Register'
import Dashboard from './React2/components/Dashboard'

// Context
import { UserContext } from './React2/context/UserContext';

function App() {
  const [user, setUser] = useState([]);

  return (
    <div className="App">
      <NavBar/>

        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
  
    </div>
  );
}

export default App;
