import React, { useState, useEffect, useContext } from 'react';
import { axiosWithAuth } from '../React2/authentication/axiosWithAuth';
import ProductCard from './ProductCard'
import { UserContext } from '../context/UserContext';

const ProductList = (props) => {

  const [productList, setProductList] = useState([])
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    axiosWithAuth()
      .get("/items")
      .then(response => {
        setProductList(response.data)
        setUser({
          ...user,
          products: [productList.filter(product => {
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
      {props.listings === 'renter' && (
        <div>
          {productList.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
        </div>
      )}
      {props.listings === 'owner' && (
        <div style={{display: 'none'}}>
          {user.products.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })}
        </div>
      )}
    </div>
  )

}

export default ProductList;


