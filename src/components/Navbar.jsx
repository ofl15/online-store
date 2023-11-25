import React from 'react';

export default function Navbar({brands , categories , products}) {
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
                                                {categories && categories.map(category => (
                                                   <a className="dropdown-item" key={category.id}>
                                                       {category.attributes.title}
                                                   </a>
                                                ))}
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
                                                {brands && brands.map(brand => (
                                                   <a className="dropdown-item" key={brand.id}>
                                                       {brand.attributes.title}
                                                   </a>
                                                ))}
                                                   
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
