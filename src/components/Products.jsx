import React from 'react';
import Product from "./Product";

export default function Products({products}) {
   return (
       <div className="columns is-multiline is-centered">
        {products.map(product => (
           <div className="column is-3" key={product.id}>
               <Product
                   id={product.id}
                   brand={product.attributes.brand.data.attributes.title}
                   name={product.attributes.name}
                   price={product.attributes.price}
                   thumb={product.attributes.image.data.attributes.url}
               />
           </div>
        ))}
       </div>
   );
}
