import React, { useEffect, useState } from 'react';
import Layout from "../components/Layout";
import axios from 'axios';
import { ORDERS } from '../urls';

export default function Orders() {

    const [orders, setOrders] = useState([])
    const { username } = JSON.parse(localStorage.getItem('user') || [])

    useEffect(() => {
        axios.get(ORDERS + `&filters[customer][username][$eq]=${username}`)
            .then(res => setOrders(res.data.data))
            .catch(err => console.log(err))
    }, [])


   return (
       <Layout>
           <div className="section">
               <div className="container">
                   <div className="title has-text-centered">My recent orders</div>
                   <div className="box">
                        {!orders || orders.length === 0 ? (
                            <div className="title has-text-centered">You didn't ordered something yet</div>
                        )
                            :(
                                <table className="table is-striped is-fullwidth">
                                    <thead>
                                    <tr>
                                            <th>Order</th>
                                            <th>Total</th>
                                            <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {orders && orders.map(order => (
                                        <tr key={order.id}>
                                            <td>Order № {order.id}</td>
                                            <td>{order.attributes.total} sum</td>
                                            <td>Pending</td>
                                            <td></td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            )}
                   </div>
               </div>
           </div>
       </Layout>
   );
}





