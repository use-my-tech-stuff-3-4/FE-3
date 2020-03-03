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

return(
  <div class = "card">
    <div class = "card_header">
      <h2>{product.title}</h2>
      <h3>`${product.brand} - ${product.model}`</h3>
    </div>

    <img class = "img" src = {product.imgURL}>

    <div class = "discription">
      <p>{product.description}</p>
      <h2>{product.price}</h2>
      <h4>"Available: "{product.availability ? <p>"Yes"</p> :  <p>"No"</p> }</h4>

    </div>

    </div>

  </div>

)

}
