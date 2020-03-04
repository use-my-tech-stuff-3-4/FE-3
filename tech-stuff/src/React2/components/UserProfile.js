import React from 'react'
import Login from '../authentication/Login'
import { makeStyles } from '@material-ui/core/styles'; 
import Card from '@material-ui/core/Card';


const useStyles = makeStyles(theme => ({
  card: {
    width: "100%",
    padding: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    color: "#000",
    fontSize: "1.4rem",
    fontWeight: 700
  },
  img: {
    width: 200,
  },

}));

const UserData = localStorage.getItem("userID");

console.log("this is from user profile: ", UserData);


const UserProfile = () => {

  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div>
      <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" alt="USER" height="30%" width="30%"></img>
      </div> 
      <div>
        <h2>JOHN DOE</h2> 
      </div>
      <div>
        <p>STATUS: 
        isRenter;
        isowner;</p> 
      </div>
    </div>
  )

}

export default UserProfile; 