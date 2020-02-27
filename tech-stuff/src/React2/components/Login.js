import React, { useState } from 'react'; 
import axios from 'axios'; 

const Login = (props) => {
  // TODO: 
  // 1. Render React 1 Login Form
  // 2. Make a post request to retrieve a token from the api
  // 3. After handled the token, navigate to the Dashboard route

  const [user, setUser] = useState({
    username: "Lambda School",
    password: "Lambda-WEBPT"
  }); 

  const handleChange = (event) => {
    // setUser({...user, [event.target.name]: event.target.value}); 
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    /*
    // make post request, retrieve token, --> "/dashboard"

    axios
    .post("baseURL/api/login", user)
    .then(response => {
      console.log("Successfully logged in: ", response.data.payload);
      localStorage.setItem("token", response.data.payload);
      props.history.push("/dashboard"); 
    })
    .catch(error => {
      console.log("Could not log in: ", error); 
    })
    */
  }

  return (
    <div>
      {/* < React 1 Login Form > */}
      {/* <button onClick={handleSubmit}>Log in</button> */}
    </div>
  )

}

export default Login;