import React from 'react';
import { RatingProvider } from './context/RatingContext';
import Rating from './Rating';
import AverageRating from './AverageRating';

const StarRating = () => {
    return (
        <>
            <RatingProvider>
                <>
                    <h2> 5 Start Rating app</h2>
                    <Rating />
                    <AverageRating />
                </>
            </RatingProvider>
        </>
    )
}

export default StarRating;