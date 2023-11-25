import React from 'react';

export default function Product({name, brand, price , thumb , id}) {
   return (
       <div className="card" style={{maxWidth: '270px'}}>
           <div className="card-image">
               <figure className="image">
                   <img src={`http://localhost:1337${thumb}`}
                        alt="Placeholder image" 
                        style={{height: "300px"}}
                        />
               </figure>
           </div>
           <div className="card-content ">
               <div className="media">
                   <div className="media-content">
                       <p className="title is-5"> {name}</p>
                       <div className="columns is-centered mt-3">
                           <div className="column is-10">
                               <div className="title is-6">
                                   {price} uzs
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
