import React from 'react';

export default function Menu() {
   return (
       <aside className="menu p-4 has-text-centered" style={{height: '1000px'}}
>
           <div className="title is-size-3 ">
               Online store
           </div>
           <div className="menu-label  has-text-weight-bold my-5 is-size-5">
               <div className='is-size-3'>
                   <ion-icon name="person-circle-outline"/>
               </div>
               Monday
           </div>
           <div className="menu-label ">
               Menu
           </div>
           <ul className="menu-list ">
               <li>
                   <a>Cart</a>
               </li>
               <li>
                   <a>Orders</a>
               </li>
               <li>
                   <a className='has-text-danger'>Log out</a>
               </li>
           </ul>
       </aside>
   );
}

