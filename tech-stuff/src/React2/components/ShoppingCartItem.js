import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Link } from "react-router-dom";


const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: '3px',
    width: "100%",
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
    background: "#474848",
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

}));


const Item = product => {

	const classes = useStyles();

	return (
		<div className="shopping-cart_item" key ={product.id}>
			<Card className={classes.card}>
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

			</div>
			</Card>
		</div>
	);
};

export default Item;
