import React, { useState } from 'react';
import { useDepth } from './DepthContext';

const Comment = ({ comment, level, addReply }) => {
    const maxDepth = useDepth();
    const [replyText, setReplyText] = useState('');
    const [showReplyBox, setShowReplyBox] = useState(false);

    const handleReply = () => {
        if (replyText.trim()) {
            addReply(comment.id, {
                id: Date.now(),
                text: replyText,
                level: level + 1,
                replies: [],
            });
            setReplyText('');
            setShowReplyBox(false);
        }
    };

    return (
        <div className={`card my-1
         ${level === 0 ? 'border-primary' : 'border-secondary'}`} style={{ marginLeft: `${level * 30}px` }}>
            <div className="card-body">
                <p className="card-text">
                    <strong>Comment:</strong> {comment.text} <span className="text-muted">(Level {level})</span>
                </p>

                {/* Reply Button */}
                {level < maxDepth && (
                    <button className="btn btn-sm btn-outline-primary me-2" onClick={() => setShowReplyBox(!showReplyBox)}>
                        Reply
                    </button>
                )}

                {/* Reply Input Box */}
                {showReplyBox && level < maxDepth && (
                    <div className="mt-2">
                        <input
                            type="text"
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            className="form-control mb-2"
                            placeholder="Type your reply"
                        />
                        <button className="btn btn-sm btn-success" onClick={handleReply}>
                            Submit Reply
                        </button>
                    </div>
                )}
            </div>

            {/* Render Nested Replies Recursively */}
            <div className="ms-3">
                {comment.replies.map((reply) => (
                    <Comment key={reply.id} comment={reply} level={level + 1} addReply={addReply} />
                ))}
            </div>
        </div>
    );
};

export default Comment;
