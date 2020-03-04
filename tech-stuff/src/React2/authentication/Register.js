import React from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "./axiosWithAuth";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  banner: {
    display: "flex",
    flexFlow: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    width: "100%",
    height: "100%",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "rgba(128, 128, 128, 0.1)", 
  },
  box1: {
    // border: "2px solid orange",
    padding: 30,
    display: "flex",
    flexFlow: "row", 
    flexWrap: "wrap",
    justifyContent: "center",
  },
  box2: {
    display: "flex",
    justifyContent: "center",
  },
  leftCont: {
    display: "flex",
    width: "100%",
    fontSize: "1.7rem"
  },
  logo: {
    width: "50%",
  },
  mainTitle: {
    color: "white",
    margin: 20,
    width: "100%",
  },
  link: {
    textDecoration: "none",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

class Register extends React.Component {

  // const classe = useStyles();
  
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
      <div>
      <div>
      {/* <div className={classes.banner}> */}
        {/* <div className={classes.box1}>
          <div className={classes.leftCont}>
            <Link className={classes.link} to="/">
              <h1 className={classes.mainTitle}>
                USE MY TECH STUFF
              </h1>
            </Link>
          </div>
        </div> */}
        {/* <div className={classes.box2}> */}
        <h1 className="text-center">SIGN UP</h1>
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
            <p>
              Already have an account? <Link to="/login">LOGIN</Link>
            </p>
          </form>
        </div>
      </div>
    </div>

    );
  }
}

export default Register;
