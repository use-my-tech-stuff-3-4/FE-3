import React from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "./axiosWithAuth";
import Typography from "@material-ui/core/Typography";
import Styles from './Styles.css'

class Register extends React.Component {
  
  state = {
    credentials: {
      username: "",
      password: "",
      email: "",
      firstname: "",
      lastname: "", 
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  signup = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("register", this.state.credentials)
      .then(res => {
        this.props.history.push("/dashboard");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (

      <div className="BannerBG1">
      <br/>
        <br/>
        <Typography className="title">
          <h1>Create an account</h1> 
        </Typography>
        <p >Already have an account? 
          <Link to="/" className="signup">Sign In</Link> 
        </p>
        <br/>
        {/* <h1 className="text-center">SIGN UP</h1> */}
          <form onSubmit={this.signup}>
            <div className="inputBox">
              <i class="fa fa-user" aria-hidden="true"></i>
              <input
                type="text"
                name="username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
                placeholder="Username"
                required
              />
            </div>
            <div className="inputBox">
              <i class="fa fa-lock" aria-hidden="true"></i>
              <input
                type="password"
                name="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
                placeholder="Password"
                required
              />
            </div>
            <div className="inputBox">
              <i class="fa fa-lock" aria-hidden="true"></i>
              <input
                type="email"
                name="email"
                value={this.state.credentials.email}
                onChange={this.handleChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="inputBox">
              <i class="fa fa-lock" aria-hidden="true"></i>
              <input
                type="firstname"
                name="firstname"
                value={this.state.credentials.firstname}
                onChange={this.handleChange}
                placeholder="First name"
                required
              />
            </div>
            <div className="inputBox">
              <i class="fa fa-lock" aria-hidden="true"></i>
              <input
                type="lastname"
                name="lastname"
                value={this.state.credentials.lastname}
                onChange={this.handleChange}
                placeholder="Last name"
                required
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn-login">
                SIGN UP
              </button>
            </div>
            {/* <p>
              Already have an account? <Link to="/login">LOGIN</Link>
            </p> */}
          </form>
        </div>
    );
  }
}

export default Register;
