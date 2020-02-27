import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'; 

// consider using context ... 


const initialProduct = {
    // id: Date.now(),  
    id: 0, 
		title: '',
		price: 1.00,
		image: 'URL'
}; 

const ProductList = ({props, products, updateProducts}) => {
  const [productToAdd, setProductToAdd] = useState(initialProduct); 
  const [productToEdit, setProductToEdit] = useState(initialProduct); 

  const addProduct = event => {
    /*
    // add product using [post request]: 

      axiosWithAuth()
      .post("baseURL/api/products", productToAdd)
      .then(response => {
        console.log("Product added: ", response);
        updateProducts([...products, productToAdd])
      })
      .catch(error => {
        console.log("Could not add product: ", error); 
      })
    */
  };

  const deleteProduct = product => {
    /*
    // delete product using [delete request]: 

      axiosWithAuth()
      .delete(`baseURL/api/products/${product.id}`)
      .then(response => {
        console.log("Product deleted: ", response);
        // filter finction 
      })
      .catch(error => {
        console.log("Could not delete product: ", error); 
      })
    */
  }; 

  const editProduct = event => {
    /*
    // edit product using [put request]: 

      axiosWithAuth()
      .put(`baseURL/api/products/${productToEdit.id}`, productToEdit)
      .then(response => {
        consloe.log("Product edited: ", response); 
      })
      .catch(error => {
        console.log("Could not edit color: ", error); 
      })
    */
  }

  return (
    <div>
      {/* <addProductForm /> */}
      {/* <ProductCard /> */}
    </div>
  )

}

export default ProductList; 


