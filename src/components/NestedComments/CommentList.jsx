import React, { useState } from 'react';
import Comment from './Comment';

const CommentList = () => {
  const [comments, setComments] = useState([]);

  const addReply = (parentId, newComment) => {
    const addCommentRecursively = (nodes) => {
      return nodes.map((node) => {
        if (node.id === parentId) {
          return { ...node, replies: [...node.replies, newComment] };
        }
        return { ...node, replies: addCommentRecursively(node.replies) };
      });
    };

    if (parentId === null) {
      setComments([...comments, newComment]);
    } else {
      setComments(addCommentRecursively(comments));
    }
  };

  return (
    <div className="container my-4">
      <h1 className="text-center text-primary">Nested Comments</h1>

      {/* Add a top-level comment */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Add a comment"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.target.value.trim()) {
              addReply(null, {
                id: Date.now(),
                text: e.target.value,
                level: 0,
                replies: [],
              });
              e.target.value = '';
            }
          }}
        />
      </div>

      {/* Render all comments */}
      <div>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} level={0} addReply={addReply} />
        ))}
      </div>
    </div>
  );
};

export default CommentList;
