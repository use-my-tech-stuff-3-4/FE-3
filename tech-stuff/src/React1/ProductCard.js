import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
import Card from '@material-ui/core/Card';
import { axiosWithAuth } from '../React2/authentication/axiosWithAuth'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: '10px',
    width: "40%",
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: 10,
  },
  title: {
    color: "#000",
    fontSize: "1.4rem",
    fontWeight: 700
  },
  img: {
    width: 200,
  },

}));


const ProductCard = (props, updateProduct) =>{
  const classes = useStyles();

  const [product, setProduct] = useState({
    owner: 0,
    title: "",
    description: "",
    price: "",
    availability: false,
    brand: "",
    model: "",
    imgURL: "",
    renter: false
  })

  
  //------------------- DELETE AND EDIT -----------------------------//
  /******************************************************************/

  const [editing, setEditing] = useState(false);
  const [productToEdit, setProductToEdit] = useState([]);

  const deleteProduct = product => {

      console.log("Deleting Product", product);
      console.log("Deleting Product id: ", product.id);

      axiosWithAuth()
      .delete(`https://use-my-tech-stuff-3.herokuapp.com/api/products/${product.id}`)
      .then(response => {
        console.log("Product deleted: ", response);
        // filter function
        // let remainingProducts = product.filter(existingProduct => existingProduct.id !== product.id);
        // updateProduct(remainingProducts);
        axiosWithAuth()
          .get('https://use-my-tech-stuff-3.herokuapp.com/api/products')
          .then(res => updateProduct(res.data))
          .catch(err => console.log("get deleted: ", err))
          setEditing(false);
      })
      .catch(error => {
        console.log("Could not delete product: ", error); 
      })
  }; 

  const saveEdit = e => {
    e.preventDefault();
    console.log("Saving edits to product", productToEdit);

    axiosWithAuth()
    .put(`https://use-my-tech-stuff-3.herokuapp.com/api/products/${productToEdit.id}`, productToEdit)
    .then (response => {
      console.log("product edited:", response);

      axiosWithAuth()
          .get(`https://use-my-tech-stuff-3.herokuapp.com/api/products`)
          .then(res => updateProduct(res.data))
          .catch(err => console.log(err))
        setEditing(false);

    })
    .catch (error => {
      console.log("Couldn't edit product:", error);
    })

  };

  const editProduct = product => {
    setEditing(true);
    setProductToEdit(product);
  };

  //------------------- DELETE AND EDIT -----------------------------//
  /******************************************************************/
  

  const defaultImage = 'https://www.freeiconspng.com/uploads/no-image-icon-13.png'

  useEffect(() => {
    setProduct(props.product)
  }, [])

return(
  <Card className={classes.card}>
      <div className = "card_header">
        <h2>{product.title}</h2>
        <h3>{product.brand} {product.model}</h3>
      </div>

      <img className={classes.img} src = {product.imgURL}/>

      <div className = "discription">
        <p>{product.description}</p>
        <h2>$ {product.price}</h2>
        <h4>Available: {product.availability}</h4>
      </div>


      {/* <button onClick={() => props.addItemCart(props.product)}>
				Add to cart
			</button> */}

      <div>

      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit product</legend>
          <label>
            product name:
            <input
              onChange={e =>
                setProductToEdit({ ...productToEdit, product: e.target.value })
              }
              value={productToEdit.product}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}

          <span onClick = {editing}>
            <EditIcon color="primary" />
          </span>

          <span className="delete" onClick={e => {
                e.stopPropagation();
                deleteProduct(product)
              }
            }>
            <DeleteIcon color="secondary" />
          </span>

      </div>
        


        {/* {product.owner === userID && (
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        )} */}
  </Card>
  )

}

export default ProductCard
