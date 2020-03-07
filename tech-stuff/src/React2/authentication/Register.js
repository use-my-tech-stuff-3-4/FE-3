import React from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "./axiosWithAuth";
import { createMuiTheme, withStyles, ThemeProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";


const styles = theme => ({
  banner: {
    display: "flex",
    flexFlow: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    width: "100%",
    height: "100%",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "rgba(128, 128, 128, 0.1)"
  },
  box1: {
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
  },
  card: {
    borderRadius: "15px",
    width: "100%",
    padding: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "left"
  },
  input: {
    marginBottom: 20,
    paddingTop: 10,
    width: "100%"
  },
  title: {
    color: "#000",
    fontSize: "1.4rem",
    fontWeight: 700
  },
  signup: {
    color: "#7932FF"
  },
  signin: {
    borderRadius: "15px",
    zIndex: 990,
  },
  buttonDiv: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: 'center'
  },
  singleField: {
    width: 300
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
    zIndex: 999
  },
    wrapper: {
      position: 'relative',
  }
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#7932FF"
    }
  }
});


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
    const { classes } = this.props;

    return (

      <div className="BannerBG2">
        <div className={classes.banner}>
          <div className={classes.box1}>
            <div className={classes.leftCont}>
              <Link className={classes.link} to="/">
                <h1 className={classes.mainTitle}>USE MY TECH STUFF</h1>
              </Link>
            </div>
          </div>
          <div className={classes.box2}>
            
            <Card className={classes.card}>
              <div>
                <Typography className="title">
                <h1>Create an account</h1> 
                </Typography>
                <p style={{ fontSize: ".8rem" }}>
                  Already have an account? {" "}
                  <Link to="/" className="signup">
                  Sign In
                  </Link>
                </p>
              </div>

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
              </form>

            </Card>

          </div>
        </div>
      </div>

    );
  }
}

export default withStyles(styles, { withTheme: true })(Register);
