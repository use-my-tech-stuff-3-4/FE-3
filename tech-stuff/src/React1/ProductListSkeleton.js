import React, { useEffect, useContext } from 'react';
import { axiosWithAuth } from '../React2/authentication/axiosWithAuth'; 
import ProductCard from './ProductCard'
import { ProductContext } from '../React2/context/ProductContext';

const ProductList = () => {

  let {products, setProducts} = useContext(ProductContext)

  useEffect(() => {
    axiosWithAuth()
    .get("https://use-my-tech-stuff-3.herokuapp.com/api/items/")
    .then(response => {
      setProducts(response.data)
    })
    .catch(error => {
      console.log("Could not get listings: ", error); 
    })
  }, [])

  return (
    <div>
      {/* <addProductForm /> */}
      {products.map((product) => {
          return <ProductCard key={product.id} product={product}/>
      })}
    </div>
  )

}

export default ProductList; 


