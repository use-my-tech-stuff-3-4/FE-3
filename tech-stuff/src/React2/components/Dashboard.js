import React, { useState, useEffect } from 'react'; 
import ProductList from '../../React1/ProductListSkeleton'
import Profile from './Profile'

const Dashboard = () => {
  // TODO: 
  // 1. Render React 1 components
  // 2. Fetch products data from server and set data to the productList state

  const [productList, setProductList] = useState([]); 

  useEffect(() => {
    /*
    // render product to page using [get request]:

      axiosWithAuth()
      .get("baseURL/api/products")
      .then(response => {
        console.log("Products data retrieved:", response);
        setProductList(response.data);
      })
      .catch(error => {
        console.log("Could not retrieve products data: ", error);
      })
    */
  }, [])

  return (
    <div>
      <h1>Product info</h1> 
      <Profile/>
      <ProductList />
    </div>
  )

}

export default Dashboard; 