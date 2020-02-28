import React, { useState } from 'react'; 
import axios from 'axios'; 

const Register = (props) => {

    const [newUser, setNewUser] = useState({
        username: "",
        email: "",
        isrenter: false,
        isloaner: false,
        password: ""
    }); 
    // creating function to handle state on submit
  const handleSubmit = (event) => {
    //axios.post
  }
  // function to handle state when a new character is entered into the box
  const handleChange = (event) => {
    setNewUser({...newUser, [event.target.name]: event.target.value})
  }

  return (
    <section>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username"> Username </label>
            <input
                type = "text"
                placeholder = "Enter Username"
                id = "username"
                name = "username"
                value = {newUser.username}
                onChange = {handleChange}
            />
            <label htmlFor="email"> Email </label>
            <input
                type = "text"
                placeholder = "Enter Email"
                id = "email"
                name = "email"
                value = {newUser.email}
                onChange = {handleChange}
            />
            <label htmlFor="password"> Username </label>
            <input
                type = "text"
                placeholder = "Enter Password"
                id = "password"
                name = "password"
                value = {newUser.password}
                onChange = {handleChange}
            />
            <label htmlFor="isRenter"> UserType </label>
            <input
                type = "checkbox"
                id = "isRenter"
                name = "isRenter"
                value = {newUser.isrenter}
                onChange = {handleChange}
            />
            <label htmlFor="isLoaner"> UserType </label>
            <input
                type = "checkbox"
                id = "isLoaner"
                name = "isLoaner"
                value = {newUser.isloaner}
                onChange = {handleChange}
            />

        </form>
    </section>
  )

}

export default Register