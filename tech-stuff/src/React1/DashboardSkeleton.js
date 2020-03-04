import React, { useState, useEffect } from 'react'; 
import { axiosWithAuth } from '../React2/utils/axiosWithAuth'; 
import ProductList from './ProductListSkeleton'; 

const Dashboard = () => {

  return (
    <div>
      <ProductList/>
    </div>
  )
}

export default Dashboard;
