import { useCallback, useContext, useState } from "react";
import { RatingContext } from "./context/RatingContext";
import Star from "./Star";

const Rating = () => {
    const [hovered, setHovered] = useState(0);
    const [selected, setSelected] = useState(0);
    const { addRating } = useContext(RatingContext);

    const handleMouseEnter = useCallback((index) => {
        if (hovered !== index) {
            setHovered(index);
        }
    }, [hovered])
    const handleMouseLeave = useCallback(() => {
        if (hovered !== 0) setHovered(0);
    }, [hovered])


    const handleClick = useCallback((index) => {
        if (selected !== index) {
            setSelected(index);
            addRating(index);
        }
    }, [selected, addRating]);

    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    filled={star <= (hovered | selected)}
                    onMouseEnter={() => handleMouseEnter(star)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(star)}
                />
            ))}
            <p> Selected Rating : {selected} </p>
        </div>
    )
}

export default Rating;