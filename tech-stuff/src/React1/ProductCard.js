import React, { useState } from 'react';
import axios from 'axios';
//hook statement to set state for product
const ProductCard = (props) =>{
  const [product, setProduct] = useState({
    owner: false,
    title: "",
    description: "",
    price: "",
    availability: false,
    brand: "",
    model: "",
    imgURL: "",
    renter: false
  })
setProduct(props.product)
return(
  <div className = "card">
    <div className = "card_header">
      <h2>{product.title}</h2>
      <h3>`${product.brand} - ${product.model}`</h3>
    </div>

    <img className = "img" src = {product.imgURL}>

    <div className = "discription">
      <p>{product.description}</p>
      <h2>{product.price}</h2>
      <h4>"Available: "{product.availability ? <h4>"Yes"</h4> :  <h4>"No"</h4> }</h4>

    </div>

    </div>

  </div>

)

}
