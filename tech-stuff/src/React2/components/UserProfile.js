import React, {useContext, useEffect} from 'react'
import {UserContext} from '../context/UserContext'
import {axiosWithAuth} from '../authentication/axiosWithAuth'

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

  return (
    <div>
      <h3>User Profile</h3> 
  <h2>{user.firstName} {user.lastName}</h2> 
    </div>
  )

}

export default UserProfile; 