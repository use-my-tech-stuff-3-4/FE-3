import React, { useState } from 'react';
import { axiosWithAuth } from '../React2/authentication/axiosWithAuth'
import UploadImage from '../React2/components/UploadImage'

const AddProductForm = (props) => {
  //hook statement setting up state for new product
  const [newProduct, setNewProduct] = useState({
    owner: localStorage.getItem('userid'),
    title: "",
    description: "",
    price: "",
    availability: true,
    brand: "",
    model: "",
    imgURL: "",
    renter: localStorage.getItem('username')
  })
  //handle changes statement to access the event object and give our object key value pairs
  const handleChange = event => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value })
  };


  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post('/items', newProduct)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    setNewProduct({
      owner: localStorage.getItem('userid'),
      title: "",
      description: "",
      price: "",
      availability: true,
      brand: "",
      model: "",
      imgURL: "",
      renter: localStorage.getItem('username')
    });
  };
  // le form
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <UploadImage />
        <label htmlFor="title"> Title </label>
        <input
          type="text"
          placeholder="Enter Title"
          id="title"
          name="title"
          value={newProduct.title}
          onChange={handleChange}
        />
        <label htmlFor="type"> Type </label>
        <input
          type="text"
          placeholder="Enter Type"
          id="type"
          name="type"
          value={newProduct.type}
          onChange={handleChange}
        />
        <label htmlFor="brand"> Brand </label>
        <input
          type="text"
          placeholder="Enter Brand"
          id="brand"
          name="brand"
          value={newProduct.brand}
          onChange={handleChange}
        />
        <label htmlFor="model"> Model </label>
        <input
          type="text"
          placeholder="Enter Model"
          id="model"
          name="model"
          value={newProduct.model}
          onChange={handleChange}
        />

        <label htmlFor="description"> Description </label>
        <input
          type="text"
          placeholder="Enter Description"
          id="description"
          name="description"
          value={newProduct.description}
          onChange={handleChange}
        />
        <label htmlFor="price"> Price </label>
        <input
          type="text"
          placeholder="Enter Price"
          id="price"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
        />
        <button type='submit'>Add Product</button>
      </form>

    </section>
  )
}

export default AddProductForm