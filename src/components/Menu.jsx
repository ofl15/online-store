import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa"; 
import { IoBasketOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

export default function Menu() {

    const [{username}] = useState(JSON.parse(localStorage.getItem("user")) || [])

    const navigate = useNavigate()

    

    const logOut = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        navigate('/login')
    }



   return (
       <aside className="menu p-4 has-text-centered" style={{height: '1000px'}} >
           <Link to="/" className="title is-size-3 ">
               Online store
           </Link>
           <div className="menu-label  has-text-weight-bold my-5 is-size-5">
               <div className='is-size-3'>
                   <ion-icon name="person-circle-outline"/>
               </div>
               < FaRegUserCircle/> <br />
               {username ? username : "user"}
           </div>
           <div className="menu-label ">
               Menu
           </div>
           <ul className="menu-list ">
                <li>
                        <FaCartPlus/>
                    <Link to='/cart' style={{ "display": "inline-block" }}>
                        Cart
                    </Link>
                </li>
                <li>
                        <IoBasketOutline/>
                    <Link to='/cart' style={{ "display": "inline-block" }}>
                        Orders
                    </Link>
                </li>
                <li>
                        <IoExitOutline />
                    <a onClick={logOut} className='has-text-danger' style={{ "display": "inline-block" }}>
                        Log out
                    </a>
                </li>
            </ul>

       </aside>
   );
}

