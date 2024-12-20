import { useContext, useEffect, useState } from "react"
import { RatingContext } from "./context/RatingContext"

const AverageRating = () =>{
    const {ratings} = useContext(RatingContext);
    const [average, setAverage] = useState(0);

    useEffect(()=>{
        if(ratings?.length > 0){
            const total = ratings.reduce((acc, rating)=> acc + rating, 0);
            setAverage((total / ratings.length).toFixed(2));
        }
    },[ratings]);

    return (
        <div>
        <h3>Average Rating : {average}</h3>
       
        </div>
    )
}

export default AverageRating;