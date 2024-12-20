import { createContext, useState } from "react";

export const RatingContext = createContext();

export const RatingProvider = ({ children }) => {
    const [ratings, setRatings] = useState([]);

    const addRating = (rating) => {
        setRatings((prevRating) => [...prevRating, rating]);
    }

    return (
        <RatingContext.Provider value={{ ratings, addRating }}>
            {children}
        </RatingContext.Provider>
    )
}