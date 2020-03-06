import React, { useEffect, useContext } from 'react';
import { axiosWithAuth } from '../React2/authentication/axiosWithAuth';
import ProductCard from './ProductCard'
import { ProductContext } from '../React2/context/ProductContext';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../React2/context/UserContext';

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

  let { products, setProducts } = useContext(ProductContext)
  let { user, setUser } = useContext(UserContext)

  let myListing = true

  useEffect(() => {
    axiosWithAuth()
      .get("https://use-my-tech-stuff-3.herokuapp.com/api/items/")
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => {
        console.log("Could not get listings: ", error);
      })
  }, [])

  return (
    <div className={classes.root}>
      {!user.toggleProducts ? (
        products.map((product) => {
          return <ProductCard key={`${product.id} allListings`} product={product} />
        })
      ) : (
          user.products.map((product) => {
            console.log(product)
            return <ProductCard key={`${product.id} myListings`} product={product} myListing={myListing}/>
          })
        )}

    </div>
  )

}

export default ProductList;


