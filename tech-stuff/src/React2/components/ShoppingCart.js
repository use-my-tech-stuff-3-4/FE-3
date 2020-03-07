import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Item from './ShoppingCartItem';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
	root: {
		display: "flex",
		justifyContent: "center",
		alignItems: "flex-start",
		margin: 50,
	},
	itemCard: {
		margin: 100,
	}, 
  menu: {
    display: "flex",
		justifyContent: "center",
		flexDirection: "column",
    width: "30%",
    alignItems: "center",
		position: "sticky",
		margin: 100,
  },
  menuItem: {
		borderRadius: '0px',
		width: "90%",
		padding: 25,
		background: "#F7F7F7",

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
  p: {
    color: "gray",
		background: "#474848",
		borderRadius: '0px',
		width: "100%",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontWeight: 700,
    display: "flex",
    justifyContent: "center",
  }
});

const ShoppingCart = () => {
	const classes = useStyles();

	const {cart, removeItem} = useContext(CartContext);

	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className={classes.root}>
			<div className={classes.itemCard}>
			{cart.map(item => (
				<Item key={item.id} {...item} removeItem={removeItem}/>
			))}
			</div>
			<div className={classes.menu}>
				<Paper elevation={0.8} className={classes.menuItem}>
					Order Summary
				</Paper>
				<Paper elevation={0.8} className={classes.menuItem2}>
					<div>Subtotal:</div>
					<div>${getCartTotal()}</div>
				</Paper>  
				<Paper elevation={0.8} className={classes.menuItem2}>
					<div>Shipping:</div>
					<div>FREE</div>
				</Paper>  
				<Paper elevation={0.8} className={classes.menuItem2}>
					<div>Total:</div>
					<div>${getCartTotal()}</div>
				</Paper> 

				<br/>
				<Paper className={classes.p}>
					<p>CONTINUE TO CHECKOUT</p>  
				</Paper>        
      </div>
		</div>
	);
};

export default ShoppingCart;
