import React, { useContext } from 'react';

const Item = props => {
	return (
		<div className="shopping-cart_item" key ={props.id}>
			<img src={props.image} alt={`${props.title} product`} />


			<div key ={props.id}>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => props.removeItem(props.id)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
