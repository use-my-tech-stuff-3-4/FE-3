import React, { useState, useEffect, useContext } from 'react';
import { axiosWithAuth } from '../React2/authentication/axiosWithAuth';
import ProductCard from './ProductCard'
import { UserContext } from '../context/UserContext';
import { ProductContext } from '../context/ProductContext';

const ProductList = (props) => {

  const {products, setProducts} = useContext(ProductContext)
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    axiosWithAuth()
      .get("/items")
      .then(response => {
        setProducts(response.data)
        setUser({
          ...user,
          products: [products.filter(product => {
            console.log(product)
            return product.owner === user.id
          })]
        })
      })
      .catch(error => {
        console.log("Could not get listings: ", error);
      })
  }, [])

  return (
    <div>
      {!user.toggleProducts ? (
        <div>
          {products.map((product) => {
            console.log(product)
            return <ProductCard key={product.id} product={product} />
          })}
        </div>
      ) : (
        <div>
          {user.products.map((product) => {
            console.log(product)
            return <ProductCard key={product.id} product={product} />
          })}
        </div>
      )}
    </div>
  )

}

export default ProductList;


