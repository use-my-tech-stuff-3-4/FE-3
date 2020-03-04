import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../React2/authentication/axiosWithAuth'; 
import ProductCard from './ProductCard'
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    background: "#F4F4F4", 
  },
  title: {
    color: "#000",
    fontSize: "1.4rem",
    fontWeight: 700
  },
  img: {
    width: 100,

    border: "2px solid red"
  },

}));

const ProductList = () => {
  
  const classes = useStyles();

  const [productList, setProductList] = useState([])
  useEffect(() => {
    axiosWithAuth()
    .get("https://use-my-tech-stuff-3.herokuapp.com/api/items/")
    .then(response => {
      setProductList(response.data)
    })
    .catch(error => {
      console.log("Could not get listings: ", error); 
    })
  }, []) 

  return (
    <div className={classes.root}>
      {/* <addProductForm /> */}
      {productList.map((product) => {
          return <ProductCard key={product.id} product={product}/>
      })}
    </div>
  )

}

export default ProductList; 


