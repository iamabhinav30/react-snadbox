import { Link } from "react-router-dom";

const HomeComponent = () => {
    return (
        <>
            <h3>Applications</h3>
            <ul>
                <li>
                    <Link to="/task" className="btn btn-primary m-2">
                        Task Page
                    </Link>
                </li>

                <li>
                    <Link to="/star-rating" className="btn btn-primary m-3">
                        Star-rating
                    </Link>
                </li>

                <li>
                <Link to="/nested-comments" className="btn btn-primary m-3">
                    Nested  Comments
                </Link>
            </li>

            </ul>
        </>
    )
}

export default HomeComponent;