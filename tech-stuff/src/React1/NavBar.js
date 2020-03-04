import React from 'react'
import { Link } from "react-router-dom";
import { makeStyles} from "@material-ui/core/styles";

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
    zIndex: 999, 
  },
  leftCont: {
    display: "flex",
    width: "50%",
  },
  mainTitle: {
    color: "white",
    marginLeft: "5%"
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontWeight: 700,
    display: "flex",
    justifyContent: "center",
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



  let userID = localStorage.getItem('userid')

    return(
        <div className={classes.nav}>
            {/* <Link to='/dashboard' className={classes.link}>
                Dashboard
            </Link> */}
            <div className={classes.leftCont}>
              <h3 className={classes.mainTitle}>
                USE MY TECH STUFF
              </h3> 
            </div>
            <Link to='/' className={classes.link}>
                Login
            </Link>
            <Link to='/register' className={classes.link}>
                Register
            </Link>
        </div>
    )
}

export default NavBar
