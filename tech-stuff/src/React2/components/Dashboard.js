import React, { useEffect } from 'react'; 
import ProductList from '../../React1/ProductListSkeleton'
import UserProfile from './UserProfile'
import UploadImage from './UploadImage'
import { UserContext } from '../context/UserContext';

const Dashboard = () => {

  return (
    <div>
      <h1>Product info</h1> 
      <UploadImage/>
      <UserProfile/>
      <ProductList />
    </div>
  )

}

export default Dashboard; 