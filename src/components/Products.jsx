import React from 'react';
import Product from "./Product";

export default function Products() {
   return (
       <div className="columns is-multiline is-centered">
           <div className="column">
               <Product
                   category='laptop'
                   name='MacBook Pro M1 Pro'
                   description='lorem ipsum dolor sit amet!'
                   brand='Apple'
                   price='1000'
               />
           </div>
           <div className="column">
               <Product
                   name='MacBook Pro M1 Max'
                   brand='Apple'
                   price='1000'
               />
           </div>
           <div className="column">
               <Product
                   name='Iphone 13'
                   brand='Apple'
                   price='800'
               />
           </div>
           <div className="column">
               <Product
                   name='Apple Watch'
                   brand='Apple'
                   price='500'
               />
           </div>
       </div>
   );
}
