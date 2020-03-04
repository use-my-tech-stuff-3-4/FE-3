import React, { useState } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

// Components
import PrivateRoute from './React2/authentication/PrivateRoute';
import NavBar from './React1/NavBar'
import Login from './React2/authentication/Login'
import Register from './React2/authentication/Register'
import Dashboard from './React2/components/Dashboard'
import AddProductForm from './React1/AddProductForm'

// Context
import { UserContext } from './React2/context/UserContext';
import { ProductContext } from './React2/context/ProductContext';

function App() {
  const [user, setUser] = useState({
    id: null,
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
    address: null
  });
  const [products, setProducts] = useState([]);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <ProductContext.Provider value={{products, setProducts}}>
        <div className="App">
          <NavBar />
          <div>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />

              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/productform" component={AddProductForm} />
            </Switch>
          </div>
        </div>
      </ProductContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
