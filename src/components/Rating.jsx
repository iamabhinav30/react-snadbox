function Rating() {
    const [rating, setRating] = useState(0);
    const handleRating = (value) => setRating(value);
    return (<>

        <div>
            {[1, 2, 3, 4, 5].map((star) => {
                <span
                    key={star}
                    onClick={() => handleRating(star)}
                    style={{ cursor: "pointer", color: star <= rating ? 'gold' : 'gray' }}
                >
                    *
                </span>
            })}
        </div>
    </>)
}
    export default RatingComponent;