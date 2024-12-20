import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import TaskHomeComponent from "./components/TaskProvider/TaskHomeComponent";
import StarRating from "./components/StartRating/StarRating";
import NestedComments from "./components/NestedComments/NestedComments";
// import StarRating from "./components/StartRating/StarRating";
const BackButton = () => {
    const navigate = useNavigate();

    const handleBack = () => navigate('/');

    return (
        <button className='btn btn-secondary' onClick={(handleBack)}>
            Go to Home page
        </button>
    )
}

const AppRoutes = () => {

    return (
        <Router>
            <div>
                <BackButton />

                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/task" element={
                        <TaskHomeComponent />} />

                    <Route path="/star-rating" element={
                        <StarRating />} />

                    <Route path="/nested-comments" element={
                        <NestedComments />} />

                    <Route path="*" element={<h1>404 - Page Not found</h1>} />
                </Routes>
            </div>
        </Router>
    )
}

export default AppRoutes;