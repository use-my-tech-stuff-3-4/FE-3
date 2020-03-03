import React, { useState } from 'react'; 
import axios from 'axios'; 

const Register = (props) => {

    const [newUser, setNewUser] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: ""
    }); 
    // creating function to handle state on submit
  const handleSubmit = (event) => {
      event.preventDefault()
      console.log(newUser)
    //axios.post
    axios.post('https://use-my-tech-stuff-3.herokuapp.com/api/register', newUser)
    .then(res => {
        console.log('registered:', res)
    })
    .catch(err => {
        console.log('error:', err)
    })
  }
  // function to handle state when a new character is entered into the box
  const handleChange = (event) => {
    setNewUser({...newUser, [event.target.name]: event.target.value})
  }
  console.log("Rendering Register Form")
  return (
    <section>
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstname"> Firstname </label>
            <input
                type = "text"
                placeholder = "Enter Firstname"
                id = "firstname"
                name = "firstname"
                value = {newUser.firstname}
                onChange = {handleChange}
            />
            <br/>
            <label htmlFor="lastname"> Lastname </label>
            <input
                type = "text"
                placeholder = "Enter Lastname"
                id = "lastname"
                name = "lastname"
                value = {newUser.lastname}
                onChange = {handleChange}
            />
            <br/>
            <label htmlFor="username"> Username </label>
            <input
                type = "text"
                placeholder = "Enter Username"
                id = "username"
                name = "username"
                value = {newUser.username}
                onChange = {handleChange}
            />
            <br/>
            <label htmlFor="email"> Email </label>
            <input
                type = "text"
                placeholder = "Enter Email"
                id = "email"
                name = "email"
                value = {newUser.email}
                onChange = {handleChange}
            />
            <br/>
            <label htmlFor="password"> Password </label>
            <input
                type = "text"
                placeholder = "Enter Password"
                id = "password"
                name = "password"
                value = {newUser.password}
                onChange = {handleChange}
            />
            <br/>
            <label htmlFor="isRenter"> Renter </label>
            <input
                type = "checkbox"
                id = "isRenter"
                name = "isRenter"
                value = {newUser.isrenter}
                onChange = {handleChange}
            />
            <br/>
            <label htmlFor="isLoaner"> Loaner </label>
            <input
                type = "checkbox"
                id = "isLoaner"
                name = "isLoaner"
                value = {newUser.isloaner}
                onChange = {handleChange}
            />
            <button type = "submit" value = "submitform">Submit</button>
        </form>
    </section>
  )

}

export default Register