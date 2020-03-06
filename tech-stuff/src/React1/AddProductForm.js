import React, { useState, useContext } from 'react';
import { axiosWithAuth } from '../React2/authentication/axiosWithAuth'
import UploadImage from '../React2/components/UploadImage'
import { UserContext } from '../React2/context/UserContext';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  product_form: {
    width: "600px",
    height: "auto",
    margin: "auto",
    padding: "20px",
    border: "5px solid black",
    display: "flex",
    flexdirection: "row"


  },
  form_item: {
    padding: "5px"

  },
  form_item_container: {
    padding: "5px"
  }
}))

const AddProductForm = (props) => {

  let { user, setUser } = useContext(UserContext)
  const classes = useStyles();
  //hook statement setting up state for new product
  const [newProduct, setNewProduct] = useState({
    owner: localStorage.getItem('userid'),
    title: "",
    description: "",
    price: "",
    availability: 1,
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
    event.preventDefault()
    setUser({
      ...user,
      reloadProducts: !user.reloadProducts
    })
    axiosWithAuth()
      .post('/items', {...newProduct, imgURL: localStorage.getItem('imageURL')})
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    setNewProduct({
      owner: user.id,
      title: "",
      description: "",
      price: "",
      availability: 1,
      brand: "",
      model: "",
      imgURL: "",
      renter: user.username
    });
  };
  // le form
  return (
    <section className={classes.product_form}>
      <form onSubmit={handleSubmit}>
        <div className="form_item_container">
          <div className={classes.form_item}>
            <label htmlFor="title"> Title </label>
            <input
              type="text"
              placeholder="Enter Title"
              id="title"
              name="title"
              value={newProduct.title}
              onChange={handleChange}
            />
          </div>

          <div className={classes.form_item}>
            <label htmlFor="type"> Type </label>
            <input
              type="text"
              placeholder="Enter Type"
              id="type"
              name="type"
              value={newProduct.type}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form_item_container">
          <div className={classes.form_item}>
            <label htmlFor="brand"> Brand </label>
            <input
              type="text"
              placeholder="Enter Brand"
              id="brand"
              name="brand"
              value={newProduct.brand}
              onChange={handleChange}
            />
          </div>
          <div className={classes.form_item}>
            <label htmlFor="model"> Model </label>
            <input
              type="text"
              placeholder="Enter Model"
              id="model"
              name="model"
              value={newProduct.model}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form_item_container">
          <div className={classes.form_item}>
            <label htmlFor="description"> Description </label>
            <input
              type="text"
              placeholder="Enter Description"
              id="description"
              name="description"
              value={newProduct.description}
              onChange={handleChange}
            />
          </div>
          <div className={classes.form_item}>
            <label htmlFor="availability"> Available </label>
            <input
              type="text"
              placeholder="Enter Type"
              id="availability"
              name="availability"
              value={newProduct.availability}
              onChange={handleChange}
            />
          </div>
          <div className={classes.form_item}>
            <label htmlFor="price"> Price </label>
            <input
              type="text"
              placeholder="Enter Price"
              id="price"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
            />
          </div>
        </div>
        <UploadImage className={classes.image_select} />
        <button type='submit'>Add Product</button>
      </form>

    </section>
  )
}

export default AddProductForm
