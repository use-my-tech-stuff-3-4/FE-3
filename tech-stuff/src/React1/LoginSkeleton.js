import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
  // TODO:
  // 1. Render React 1 Login Form
  // 2. Make a post request to retrieve a token from the api
  // 3. After handled the token, navigate to the Dashboard route

  const [user, setUser] = useState({
    username: "Lambda School",
    email: "fake@fake.com",
    password: "Lambda-WEBPT"
  });

  const handleChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // make post request, retrieve token, --> "/dashboard"

    axios
    .post("https://use-my-tech-stuff-3.herokuapp.com/api/login", user)
    .then(response => {
      console.log(response.data.message);
      localStorage.setItem("token", response.data.token);
      props.history.push("/dashboard");
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
