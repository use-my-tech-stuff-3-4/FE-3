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


