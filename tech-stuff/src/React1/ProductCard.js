import React, { useState, useEffect } from 'react';
import { CartContext } from '../React2/context/CartContext';
import { makeStyles } from '@material-ui/core/styles'; 
import Card from '@material-ui/core/Card';


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

//hook statement to set state for product
const ProductCard = (props) =>{
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

  const defaultImage = 'https://www.freeiconspng.com/uploads/no-image-icon-13.png'

  let userID = localStorage.getItem('userID')

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
        <h4>Available: {product.availability ? <h4>Yes</h4> :  <h4> No </h4> } </h4>
      </div>
      <button onClick={() => props.addItemCart(props.product)}>
				Add to cart
			</button>
        {product.owner === userID && (
          <div>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        )}
  </Card>
  )

}

export default ProductCard
