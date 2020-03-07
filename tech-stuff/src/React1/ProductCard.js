import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { axiosWithAuth } from '../React2/authentication/axiosWithAuth'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { ProductContext } from '../React2/context/ProductContext'
import { UserContext } from '../React2/context/UserContext';
import Badge from '@material-ui/core/Badge';
import { Link } from "react-router-dom";
import { green } from '@material-ui/core/colors';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip'
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: '3px',
    width: "25%",
    padding: 50,
    paddingTop: 30,
    display: "flex",
    ustifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: 10,
    background: "#F2F2F2",
  },
  editCard: {
    borderRadius: '10px',
    width: "100%",
    padding: 20,
    paddingTop: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    background: "#FF5900",
    color: "white",
  },
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: 10,
    background: "#F2F2F2",
    width: "100%",
  },
  item_header: {
    textAlign: "left", 
    padding: 10,
    fontSize: "0.8rem",
  },
  title: {
    color: "#000",
    fontSize: "1.4rem",
    fontWeight: 700
  },
  img: {
    width: 200,
  },
  rightButton: {
    textAlign: "right",
    width: "100%", 
  },
  menuItem2: {
		borderRadius: '0px',
		display: "flex",
		justifyContent: "space-between",
		flexDirection: "row",
		width: "90%",
		padding: 25,
		background: "#F7F7F7",
  },

}));


const ProductCard = (props) => {
  const classes = useStyles();

  let { products, setProducts } = useContext(ProductContext)
  let { addItemCart } = useContext(ProductContext)
  let { user, setUser } = useContext(UserContext)

  const [value, setValue] = React.useState(4);

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
      .delete(`/items/${product.id}`)
      .then(response => {
        console.log("Product deleted: ", response);
        axiosWithAuth()
          .get('/items')
          .then(res => setProducts(res.data))
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
      .put(`/items/${productToEdit.id}`, productToEdit)
      .then(response => {
        console.log("product edited:", response);
        axiosWithAuth()
          .get(`/items`)
          .then(res => setProducts(res.data))
          .catch(err => console.log(err))
        setEditing(false);
      })
      .catch(error => {
        console.log("Couldn't edit product:", error);
      })
  };

  //------------------- DELETE AND EDIT -----------------------------//
  /******************************************************************/


  const defaultImage = 'https://www.freeiconspng.com/uploads/no-image-icon-13.png'

  useEffect(() => {
    setProduct(props.product)
  }, [])

  return (
    <Card className={classes.card}>
      <div className={classes.rightButton}>
      <div>

        {props.myListing && (
          <div>
            <Tooltip title="Edit" placement="top">
            <span onClick={() => {
              setEditing(true) // edit current product
            }}>
              <EditIcon color="primary" />
            </span>
            </Tooltip>

            <Tooltip title="Delete" placement="top">
            <span className="delete" onClick={e => {
              e.stopPropagation();
              deleteProduct(product) // delete from product list
            }
            }>
              <DeleteIcon color="secondary" />
            </span>
            </Tooltip>
          </div>
        )}
        <br/>
        <br/>

            <Tooltip title="Add to cart" placement="top">
            <span onClick={() => {
              addItemCart(product) // add to cart
            }}>
              <AddCircleIcon color="primary" style={{ color: green[500] }}/>
            </span>
            </Tooltip>

        {editing && (
          <form onSubmit={saveEdit} className={classes.editCard}>
            <h2>edit product</h2>
              <Paper elevation={0.8} className={classes.menuItem2}>
                <div>Title:</div>
                <div>
                <input
                  onChange={e => {
                    setProductToEdit({ ...product, title: e.target.value })
                  }}
                  value={productToEdit.product}
                />
                </div>
              </Paper>  

              <Paper elevation={0.8} className={classes.menuItem2}>
                <div>Type:</div>
                <div>
                <input
                  onChange={e => {
                    setProductToEdit({ ...product, type: e.target.value })
                  }}
                  value={productToEdit.product}
                />
                </div>
              </Paper>

              <Paper elevation={0.8} className={classes.menuItem2}>
                <div>Brand:</div>
                <div>
                <input
                  onChange={e => {
                    setProductToEdit({ ...product, brand: e.target.value })
                  }}
                  value={productToEdit.product}
                />
                </div>
              </Paper>

              <Paper elevation={0.8} className={classes.menuItem2}>
                <div>Model:</div>
                <div>
                <input
                  onChange={e => {
                    setProductToEdit({ ...product, model: e.target.value })
                  }}
                  value={productToEdit.product}
                />
                </div>
              </Paper>

              <Paper elevation={0.8} className={classes.menuItem2}>
                <div>Description:</div>
                <div>
                <input
                  onChange={e => {
                    setProductToEdit({ ...product, description: e.target.value })
                  }}
                  value={productToEdit.product}
                />
                </div>
              </Paper>

              <Paper elevation={0.8} className={classes.menuItem2}>
                <div>Available:</div>
                <div>
                <input
                  onChange={e => {
                    setProductToEdit({ ...product, availability: e.target.value })
                  }}
                  value={productToEdit.product}
                />
                </div>
              </Paper>

              <Paper elevation={0.8} className={classes.menuItem2}>
                <div>Price:</div>
                <div>
                <input
                  onChange={e => {
                    setProductToEdit({ ...product, price: e.target.value })
                  }}
                  value={productToEdit.product}
                />
                </div>
              </Paper>

            <div className="button-row">
              <button type="submit">save</button>
              <button onClick={() => setEditing(false)}>cancel</button>
            </div>
          </form>
        )}

      </div>
      </div>

    <Badge 
      badgeContent={`available: ${product.availability}`} 
      color="error"
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
        margin: 20
      }}
    >

    <div className={classes.item}>

      <div className={classes.item_header}>
        <h2>{product.title}</h2>
        <h2>$ {product.price}</h2>
        <p>{product.brand} {product.model}</p>
        <p>Product description: {product.description}</p>
        <p>Contact User: {product.owner} at <Link>email@email.com</Link> for more information on product</p>
      </div>

      <div>
      <img className={classes.img} src={product.imgURL} />
      </div>

      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Product Rating</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>

    </div>
    </Badge>
    </Card>
  )

}

export default ProductCard
