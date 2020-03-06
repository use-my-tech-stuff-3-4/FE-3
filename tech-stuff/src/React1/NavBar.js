import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../React2/context/CartContext';
import { Link } from "react-router-dom";
import { makeStyles} from "@material-ui/core/styles";
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles({
  nav: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "99.15vw",
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


const NavBar = (props) => {

  const classes = useStyles();

  const {cart} = useContext(CartContext);

  const logout = () => {
    localStorage.clear()
  };



  let userID = localStorage.getItem('userid')

    return(
        <div className={classes.nav}>
            <div className={classes.leftCont}>
              <h3 className={classes.mainTitle}>
                USE MY TECH STUFF
              </h3> 
            </div>

            <Link to='/' className={classes.link}>
              Login
            </Link>
            <Link to='/' className={classes.link} onClick={logout}>
              Logout
            </Link>

            <NavLink to="/dashboard" className={classes.link} >
              Dashboard
            </NavLink>

            <NavLink to="/cart" className={classes.link}>
            <IconButton aria-label="cart">
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon style={{ color: green[500] }} />
              </Badge>
            </IconButton>
              {/* Cart <span>{cart.length}</span> */}
            </NavLink>
        </div>
    )
}

export default NavBar
