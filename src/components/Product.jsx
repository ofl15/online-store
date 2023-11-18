import React from 'react';

export default function Product({name, brand, price}) {
   return (
       <div className="card" style={{maxWidth: '270px'}}>
           <div className="card-image">
               <figure className="image">
                   <img src='https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png'
                        alt="Placeholder image"/>
               </figure>
           </div>
           <div className="card-content ">
               <div className="media">
                   <div className="media-content">
                       <p className="title is-5"> {name}</p>
                       <div className="columns is-centered mt-3">
                           <div className="column is-10">
                               <div className="title is-6">
                                   {price} $
                               </div>
                           </div>
                           <div className="column">
                               <span className="tag is-info is-right">{brand}</span>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   )
       ;
}
