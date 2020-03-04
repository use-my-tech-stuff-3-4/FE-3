import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from '../authentication/axiosWithAuth'

const Profile = () => {
    let [userProducts, setUserProducts] = useState([])
    let user = {
        id: localStorage.getItem('userid'),
        username: localStorage.getItem('username')
    }

    console.log(user)

    const getUserProducts = () => {
        axiosWithAuth().get(`https://use-my-tech-stuff-3.herokuapp.com/api/items/${user.id}`)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log('error', error)
        })
    }

    const addProduct = event => {
        // add product using [post request]: 
    
        //   axiosWithAuth()
        //   .post("baseURL/api/products")
        //   .then(response => {
        //     console.log("Product added: ", response);
        //     updateProducts([...products, productToAdd])
        //   })
        //   .catch(error => {
        //     console.log("Could not add product: ", error); 
        //   })
      };
    
      const deleteProduct = product => {

        // // delete product using [delete request]: 
        //   axiosWithAuth()
        //   .delete(`baseURL/api/products/${product.id}`)
        //   .then(response => {
        //     console.log("Product deleted: ", response);
        //     // filter finction
        //   })
        //   .catch(error => {
        //     console.log("Could not delete product: ", error); 
        //   })
      }; 
    
      const editProduct = event => {
        // edit product using [put request]: 
    
        //   axiosWithAuth()
        //   .put(`baseURL/api/products/${productToEdit.id}`, productToEdit)
        //   .then(response => {
        //     consloe.log("Product edited: ", response); 
        //   })
        //   .catch(error => {
        //     console.log("Could not edit color: ", error); 
        //   })
      }

    return (
        <div className='profile'>
            <img alt='profile picture'/>
            <h2>{user.username}</h2>
        </div>
    )

}

export default Profile