import React, {useContext, useEffect} from 'react'
import {UserContext} from '../context/UserContext'
import {axiosWithAuth} from '../authentication/axiosWithAuth'
import { makeStyles } from '@material-ui/core/styles'; 


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
  
  let {user, setUser} = useContext(UserContext)

  let userID = localStorage.getItem('userid')

  useEffect(() => {
    axiosWithAuth()
    .get(`https://use-my-tech-stuff-3.herokuapp.com/api/users/${userID}`)
    .then(res => {
      setUser({
        ...user,
        id: res.data.id,
        username: res.data.username,
        email: res.data.email,
        firstName: res.data.firstname,
        lastName: res.data.lastname
      })
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }, [userID])

  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div>
      <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" alt="USER" height="30%" width="30%"></img>
      </div> 
      <div>
        <h2>JOHN DOE</h2> 
        <h2>{user.firstName} {user.lastName}</h2> 
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