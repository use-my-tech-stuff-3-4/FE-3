import React, { useState, useEffect } from 'react'; 
import { axiosWithAuth } from '../React2/utils/axiosWithAuth'; 
import ProductList from './ProductListSkeleton'; 
// import React1 from '../../React1'

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
      <ProductList/>
      {/* < Nav bar from React 1 > */}
      {/* < React 1 components > */}
      {/* <ProductList products={productList} updateProducts={setProductList}/> */}
    </div>
  )

}

export default Dashboard; 