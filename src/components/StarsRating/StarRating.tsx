import React, {FC, useState} from 'react';
import {Rating} from "react-simple-star-rating";

const StarsRating:FC = () => {
    const [rating, setRating] = useState(0)

    const handleRating = (rate: number) => {
        setRating(rate)

    }

    return (
        <div className='App'>
            <Rating
                onClick={handleRating}
                ratingValue={rating}
                size={20}
                iconsCount={10}
                transition
                fillColor='orange'
                emptyColor='gray'
                className='foo'
            />
        </div>
    )
}
export {StarsRating};