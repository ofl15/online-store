import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';
import { addProduct } from '../utils/AddProduct';
import { Link, useNavigate , useParams } from 'react-router-dom';
import { ORDER_PRODUCTS , PRODUCT, REVIEWS, REVIEWS_OF_PRODUCT } from '../urls';
import StarRating from '../components/StarRating';
import { FaStar } from 'react-icons/fa';
import { getKeyByValue } from '../utils/KeyGetter';

export default function ProductDetail() {

    const [rating , setRating] = useState(null)

    const ratingList = {1: 'bad' , 2: 'ok' , 3: 'good' , 4: 'excellent'}

    const [product , setProduct] = useState()
    const [cart , setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
    const [user] = useState(JSON.parse(localStorage.getItem('user')) || [])

    const [review, setReview] = useState('')

    const [reviews, setReviews] = useState([])

    const [page , setPage] = useState(0)
    const [pageCount , setPageCount] = useState(0)

    const navigate = useNavigate()

    const createOrderProducts = () => {
        axios.post(ORDER_PRODUCTS , {
            data: {
                amount: 1,
                product: product ,
                total: product.attributes.price
            }
        })
            .then(res => navigate(`/order/${res.data.data.id}/1`))
            .catch(err => console.log(err))
    }

    const loadReviews= () => {

        axios.get(REVIEWS_OF_PRODUCT.replace('productId', id)+ '&pagination[pageSize]=9&pagination[withCount]=true')
            .then(res =>{  
            setReviews(res.data.data)
            setPage(res.data.meta.pagination.page)
            setPageCount(res.data.meta.pagination.pageCount)
            })
            .catch(err => console.log(err))
    }


    async function addReview(event) {
        event.preventDefault()

        if (review) {
            console.log(review, user, product.id, ratingList[rating]);
            await axios.post(REVIEWS , {
                data: {
                    body: review,
                    customer: user,
                    product: product.id , 
                    point: ratingList[rating]
                }
                
            })
            .then(() => {
                setReview('')
                setRating('')
                loadReviews()
            })
            .catch(err => console.log(err))

            return
        }
        alert("write something to add review")
    }


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const { id } = useParams()


    useEffect(() => {
        axios.get(PRODUCT.replace('id' , id))
            .then(res => setProduct(res.data.data))
            .catch(err => console.log(err))
        loadReviews()
    } , [])
  

    const image = product ? product.attributes.image.data.attributes.url : ''
    const description = product ? product.attributes.description : ''
    const brand = product ? product.attributes.brand.data.attributes.title : ''
    const name = product ? product.attributes.name : ''
    const price = product ? product.attributes.price : ''


   return (
     <Layout>
       <div className="section">
           <div className="container">
               <div className="tile is-ancestor">
                   <div className="tile is-vertical">
                       {product && (
                           <div className="tile">
                               <div className="tile is-parent is-vertical">
                                   <article className="tile is-child notification has-text-centered">
                                       <img
                                           src={`http://localhost:1337${image}`}
                                           alt="404 not found"/>
                                   </article>
                               </div>
                               <div className="tile is-parent">
                                   <article className="tile is-child notification">
                                       <div className="title is-4">{name}</div>
                                       <div className="subtitle has-text-grey is-spaced">{description}</div>
                                       <div className="title is-4 has-text-success">{price} sum</div>
                                       <div className="content">
                                           <div className="subtitle is-spaced has-text-weight-bold">Brand: {brand}</div>
                                           <button className="button mr-3 is-primary" onClick={createOrderProducts}>Buy</button>
                                           <button className="button is-info" onClick={() => addProduct(cart , setCart, product , 1)}>
                                               Add to card
                                           </button>
                                           <hr className='dropdown-divider my-3'/>
                                           <form className="form" onSubmit={event => addReview(event)}>
                                               <input
                                                   type="text"
                                                   className="input my-2"
                                                   onInput={event => setReview(event.target.value)}
                                                    value={review}
                                                   placeholder='Leave your review here'/>
                                                   <div className='has-text-centered'>
                                                        <StarRating object={ratingList} rating={rating} setRating={setRating}/>
                                                   </div>
                                               <button className='button is-success is-fullwidth my-2' type='submit'>
                                                   Submit
                                               </button>
                                               <Link to='/' style={{textDecoration: 'none'}}>
                                                   <button className='button is-danger is-fullwidth my-2'>
                                                       Back to main
                                                   </button>
                                               </Link>
                                           </form>
                                       </div>
                                   </article>
                               </div>
                           </div>
                       )}
                       <div className="tile is-parent">
                           <article className="tile is-child notification">
                               <div className="content">
                                   <div className="title has-text-centered">
                                       Reviews of other clients
                                   </div>
                                   <div className="columns is-multiline is-centered">
                                     {reviews && reviews.map(review => (
                                        <div className='column is-4' key={review.id}>
                                            <div className="card">
                                                <div className="card-content">
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <figure className="image is-48x48">
                                                                <img
                                                                    src="https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
                                                                    alt="Placeholder image" className='is-rounded'/>
                                                            </figure>
                                                        </div>
                                                        <div className="media-content">
                                                            <p className="title is-4">smth</p>
                                                            <p className="subtitle">olimovferuz880@gmail.com</p>e
                                                        </div>
                                                    </div>

                                                    <div className="content is-size-5">"{review.attributes.body}"</div>
                                                    {Object.keys(ratingList).map(index => (
                                                    <FaStar
                                                        size={30}
                                                        color={index <= getKeyByValue(ratingList, review.attributes.point) ? '#ffc107' : '#e4e5e9'}/>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    </div>
                               </div>
                           </article>
                       </div>
                   </div>
               </div>
           </div>
       </div> 
     </Layout>
    
   );
}




