import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {

  let history = window.location.history

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
    .post("https://use-my-tech-stuff-3.herokuapp.com/api/login", user)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log("Could not log in: ", error);
    })

  }


  return (
    <section>
        <form onSubmit ={handleSubmit}>
            <label htmlFor="username"> Username </label>
            <input
                type = "text"
                placeholder = "Enter Username"
                id = "username"
                name = "username"
                value = {user.username}
                onChange = {handleChange}
            />
            <br/>
            <label htmlFor="email"> Email </label>
            <input
                type = "text"
                placeholder = "Enter Email"
                id = "email"
                name = "email"
                value = {user.email}
                onChange = {handleChange}
            />
            <br/>
            <label htmlFor="password"> Password </label>
            <input
                type = "text"
                placeholder = "Enter Password"
                id = "password"
                name = "password"
                value = {user.password}
                onChange = {handleChange}
            />
            <br/>
            <button type = "submit" value = "submitform">Submit</button>
        </form>
    </section>
  )

}

export default Login;
