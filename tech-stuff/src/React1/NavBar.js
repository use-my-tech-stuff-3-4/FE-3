import React from 'react'
import { Link } from "react-router-dom";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles({
  nav: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
    position: "sticky",
    top: 0,
    zIndex: 999
  },
  leftCont: {
    display: "flex",
    width: "50%"
  },
  mainTitle: {
    color: "white",
    marginLeft: "10%"
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontWeight: 700,
    display: "flex",
    alignItems: "center"
  }
});


const NavBar = () => {
  const classes = useStyles();

  const logout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
    localStorage.setItem("userid", "");
    localStorage.setItem("id", "");
  };


  let userID = localStorage.getItem('userID')

    return(
        <div className={classes.nav}>
            <Link to={`/profile/${userID}`} className={classes.link}>
                Profile
            </Link>
            {/* <Link to='/dashboard' className={classes.link}>
                Dashboard
            </Link> */}
            <Link to='/' className={classes.link}>
                Login
            </Link>
            {/* <Link to='/' 
              className={classes.link}
              onClick={this.logout}
              href="baseURL"
            >
                Logout
            </Link> */}
            <Link to='/register' className={classes.link}>
                Register
            </Link>
        </div>
    )
}

export default NavBar
