import React, { useContext } from 'react';
import { ProductContext } from "../contexts/ProductContext"

// Components
import Product from './Product';

const Products = () => {			
	
// 	**const productContext = useContext(ProductContext);
// console.log(productContext) //this will return an object with two values, in this case it is addItem and products
	//this ** is how you would call useContext with the ProductContext component and get the every value back. You would then have to specify later which value you would want to use. Instead, we destructre it here and just use the values individually later one without having to drill down. They will have their own respective values. See below.

	const { products, addItem } =  useContext(ProductContext);


	return (
		<div className="products-container">

			{products.map(product => (

				
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
