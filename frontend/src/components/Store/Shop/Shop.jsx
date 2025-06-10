import React from 'react';
import { products } from '../../../databases/products';
import { Product } from '../Product/Product';
import './Shop.scss';

export const Shop = () => { 
    return(
        <>
            <div className="list-container">
                {products.map((product, index) => (
                    <Product
                        key={index}
                        image={product.image}
                        name={product.name}
                        currency={product.currency}
                        regularPrice={product.regularPrice}
                        discountedPrice={product.discountedPrice}
                    />
                ))}
            </div>
        </>
    );
};
