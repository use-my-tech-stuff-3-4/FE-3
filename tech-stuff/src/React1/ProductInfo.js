import React, { useState, useEffect } from 'react';
import axios from 'axios';
//hook statement to set state for product
const ProductInfo = () =>{


    
return(
  <div className = "card">
    <div className = "card_header">
      <h2>{product.title}</h2>
      <h3>`${product.brand} - ${product.model}`</h3>
    </div>

    <img className = "img" src = {product.imgURL}/>

    <div className = "discription">
      <p>{product.description}</p>
      <h2>{product.price}</h2>
      <h4>"Available: "{product.availability ? <p>"Yes"</p> :  <p>"No"</p> }</h4>

    </div>
  </div>)

}

export default ProductInfo