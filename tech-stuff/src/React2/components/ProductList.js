import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../React2/authentication/axiosWithAuth'; 
import ProductCard from './ProductCard'
 

const ProductList = () => {

  const [productList, setProductList] = useState([])
  useEffect(() => {
    axiosWithAuth()
    .get("/items")
    .then(response => {
      setProductList(response.data)
    })
    .catch(error => {
      console.log("Could not get listings: ", error); 
    })
  }, [])

  return (
    <div>
      {productList.map((product) => {
          return <ProductCard key={product.id} product={product}/>
      })}
    </div>
  )

}

export default ProductList; 


