import React, { useState } from 'react'; 
import ProductList from '../../React1/ProductListSkeleton'
import UserProfile from './UserProfile'
import UploadImage from './UploadImage'
import { UserContext } from '../context/UserContext';

const Dashboard = () => {

  let [listings, setListings] = useState('renter')

  return (
    <div>
      <h1>Product info</h1> 
      <UploadImage/>
      <UserProfile listings={listings} setListings={setListings}/>
      <ProductList  listings={listings} setListings={setListings}/>
    </div>
  )

}

export default Dashboard; 