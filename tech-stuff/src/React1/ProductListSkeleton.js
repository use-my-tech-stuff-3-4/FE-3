import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../React2/utils/axiosWithAuth'; 
import ProductCard from './ProductCard'
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
  const [productList, setProductList] = useState([])
  useEffect(() => {
    axiosWithAuth()
    .get("https://use-my-tech-stuff-3.herokuapp.com/api/items/")
    .then(response => {
      setProductList(response.data)
    })
    .catch(error => {
      console.log("Could not get listings: ", error); 
    })
  }, [])

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
      {productList.map((product) => {
          return <ProductCard key={product.id} product={product}/>
      })}
    </div>
  )

}

export default ProductList; 


