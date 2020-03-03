import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const Profile = () => {
    let [userProducts, setUserProducts] = useState([])
    let userID = localStorage.getItem('userID')
    useEffect(() => {
        axiosWithAuth().get(`https://use-my-tech-stuff-3.herokuapp.com/api/items/${userID}`)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log('error', error)
        })
    }, [])

    return (
        <div>
            <p>testing</p>
        </div>
    )

}

export default Profile