import React from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "./axiosWithAuth"; 
import Typography from "@material-ui/core/Typography";
import './Styles.css'

class Login extends React.Component {
  
  state = {
    credentials: {
      username: "",
      password: "",
      email: "",
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

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("login", this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);

        localStorage.setItem("userid", res.data.id);
        localStorage.setItem("username", this.state.credentials.username)
        this.props.history.push("/dashboard");
        console.log(res)
      })
      .catch(err => {
        console.log(err, err);
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="login">
        <br/>
        <br/>
        <div>
        <Typography className="title">
        <h1>Sign In</h1> 
        </Typography>
        <p style={{ fontSize: ".8rem" }}>
          New User? {" "}
          <Link to="/register" className="signup">
            Create an account
          </Link>
        </p>
        <br/>
      </div>

        <div class="bg-img">
          <div className="box">
            {/* <h1>LOGIN</h1> */}
            <form onSubmit={this.login}>
              <div className="inputBox">
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
              <div className="form-group">
                <button type="submit" className="btn-login">
                 SIGN IN
                </button>
              </div>
              {/* <p>
                Don't have an account? <Link to="/register"> SIGN UP</Link>
              </p> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;