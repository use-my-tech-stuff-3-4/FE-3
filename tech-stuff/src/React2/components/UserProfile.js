import React, {useContext, useEffect, useState} from 'react'
import {UserContext} from '../context/UserContext'
import {axiosWithAuth} from '../authentication/axiosWithAuth'
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox'; 
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ProductContext } from '../context/ProductContext';
import UploadImage from './UploadImage'

const useStyles = makeStyles(theme => ({
  card: {
    width: "90%",
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


const UserProfile = () => {
  let userID = localStorage.getItem('userid')
  let {user, setUser} = useContext(UserContext)
  let {products, setProducts} = useContext(ProductContext)

  const [checked, setChecked] = useState(true);

  const handleChange = event => {
    setUser({
      ...user,
      toggleProducts: !user.toggleProducts,
      products: products.filter(product => {
        return product.owner === user.id
      })
    })
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${userID}`)
      .then(res => {
        setUser({
          ...user,
          id: res.data.id,
          username: res.data.username,
          email: res.data.email,
          firstName: res.data.firstname,
          lastName: res.data.lastname
        })
      })
      .catch(err => {
        console.log(err)
      })
  }, [userID])

  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div>
      <UploadImage/>
      <img src="https://cdn.onlinewebfonts.com/svg/img_568657.png" alt="USER" height="30%" width="30%"></img>
      </div> 
      <div>
        <h2>{user.firstName} {user.lastName}</h2> 
      </div>
      <div>
        <p>STATUS:</p> 
        <FormControlLabel 
        label="Renter"
          control = {<Checkbox
            defaultChecked
            value="isRenter"
            color="secondary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />}
        />

        <FormControlLabel 
        label="My listings"
          id='ownerToggle'
          control = {<Checkbox
            // defaultChecked
            value="isListings"
            color="secondary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
            onChange={handleChange}
          />}
        />
        
      </div>
    </div>
  )

}

export default UserProfile; 