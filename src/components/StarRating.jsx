import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import {getKeyByValue} from "../utils/KeyGetter";

const StarRating = ({object , rating , setRating}) => {
    const [hover , setHover] = useState(null)

    

  return (
    <div>
        {Object.keys(object).map(ratingValue => (
            <label key={ratingValue}>
                <input 
                type="radio" 
                name="rating" 
                value={object[ratingValue]}
                
                />
                <FaStar 
                size={40} 
                onMouseLeave={() => setHover(null)}
                onMouseEnter={() => setHover(ratingValue)}
                className='star' 
                onClick={() => setRating(ratingValue)}
                color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                />

            </label>
         
        ))}
    </div>
  )
}

export default StarRating