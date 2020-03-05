import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import { axiosWithAuth } from '../authentication/axiosWithAuth'
import {Link} from 'react-router-dom'

const UserProfile = (props) => {

  let { user, setUser } = useContext(UserContext)

  let userID = localStorage.getItem('userid')

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

  return (
    <div>
      <h3>User Profile</h3>
      <h2>{user.firstName} {user.lastName}</h2>
      <Link to='/productform' className='btn'>Add Product</Link>
      {user.isOwner && (
        <div>
          <button onClick={() => props.setListings('owner')}>View My Products</button>
          <button onClick={() => props.setListings('renter')}>View All Products</button>
        </div>
      )}

    </div>
  )

}

export default UserProfile; 