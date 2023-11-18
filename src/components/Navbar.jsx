import React from 'react';

export default function Navbar() {
   return (
       <div>
           <section className="hero m-3">
               <div className="hero-head">
                   <header className="navbar">
                       <div className="container">
                           <div className="navbar-brand">
                               <span className="navbar-burger" data-target="navbarMenuHeroC">
                                 <span/>
                                 <span/>
                                 <span/>
                              </span>
                           </div>
                           <div id="navbarMenuHeroC" className="navbar-menu">
                               <div className="navbar-item">
                                   <button className="button is-primary">
                                       All Products
                                   </button>
                               </div>
                               <div className="navbar-start">
                                   <div className="navbar-item">
                                       <div className="dropdown is-hoverable">
                                           <div className="dropdown-trigger">
                                               <button className="button is-info" aria-haspopup="true"
                                                       aria-controls="dropdown-menu">
                                                   <span>Choose category</span>
                                               </button>
                                           </div>
                                           <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                               <div className="dropdown-content">
                                                   <a className="dropdown-item">
                                                       Laptops
                                                   </a>
                                                   <a className="dropdown-item">
                                                       Phones
                                                   </a>
                                                   <a className="dropdown-item">
                                                       Watches
                                                   </a>
                                                   <a className="dropdown-item">
                                                       Headphones
                                                   </a>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="navbar-item">
                                       <div className="dropdown is-hoverable">
                                           <div className="dropdown-trigger">
                                               <button className="button is-success" aria-haspopup="true"
                                                       aria-controls="dropdown-menu">
                                                   <span>Choose brand</span>
                                               </button>
                                           </div>
                                           <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                               <div className="dropdown-content">
                                                   <a className="dropdown-item">
                                                       Apple
                                                   </a>
                                                   <a className="dropdown-item">
                                                       Lenovo
                                                   </a>
                                                   <a className="dropdown-item">
                                                       Samsung
                                                   </a>
                                                   <a className="dropdown-item">
                                                       Asus
                                                   </a>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>

                               <div className="navbar-end">

                                   <div className="navbar-item">
                                       <div className="field has-addons">
                                           <div className="control">
                                               <input
                                                   className="input"
                                                   type="text"
                                                   placeholder="Find a product"
                                               />
                                           </div>
                                           <div className="control">
                                               <a className="button is-success">
                                                   Search
                                               </a>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </header>
                   <hr/>
               </div>
           </section>
       </div>
   );
}
