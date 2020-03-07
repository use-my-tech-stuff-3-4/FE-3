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
import ShoppingCart from './React2/components/ShoppingCart'

// Context
import { UserContext } from './React2/context/UserContext';
import { ProductContext } from './React2/context/ProductContext';
import { CartContext } from './React2/context/CartContext';


function App() {
  const [user, setUser] = useState({
    id: null,
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
    address: null,
    toggleProducts: false,
    products: [
      {
        id: 444,
        owner: 12,
        title: "For rent",
        type: "Gaming Console",
        description: "Lorem ipsum dolor sit amet",
        price: 123,
        availability: 1,
        brand: "lorem",
        model: "ipsum",
        imgURL: "http://picsum.photos/id/139/200/200",
        renter: null
      }

    ]
  });
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // add and remove Item form cart
  const addItemCart = item => {
    console.log('add Item: ', item);
    setCart(cart => [...cart, item])
  };

  const removeItemCart = remove => {
    setCart(cart.filter(item => item.id !== remove));
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ProductContext.Provider value={{ products, setProducts, addItemCart }}>
        <CartContext.Provider value={{ cart, removeItemCart }}>
        <div className="App">
          <NavBar />
          <div>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />

              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/productform" component={AddProductForm} />
              <PrivateRoute path='/cart' component={ShoppingCart} /> 
            </Switch>
          </div>
        </div>
        </CartContext.Provider>
      </ProductContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
