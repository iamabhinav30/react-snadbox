import CommentList from "./CommentList";
import { DepthProvider } from "./DepthContext";

const NestedComments = () => {
    return (
        <DepthProvider maxDepth={3}>
            <div className="container">
                <CommentList />
            </div>
        </DepthProvider>
    )
}

export default NestedComments;