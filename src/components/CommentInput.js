import React, { useState } from 'react';
import Loader from "./Loader";

const CommentInput = ({ isVisible, toggleVisibility }) => {
  const [loading, startLoading] = useState(false);
  const [message, recordMessage] = useState('');

  const closeCommentInput = () => {
    toggleVisibility(false);
    startLoading(false);
    recordMessage('');
  };

  const sendComment = (event) => {
    event.preventDefault();

    startLoading(true);
  };

  return (
    <div
      className="comment-input"
      style={isVisible ? {"display": "block"} : {"display": "none"}}
    >
      <section className="comment-input__header-section">
        <h2 className="comment-input__header">Add comment</h2>
        <button
          onClick={closeCommentInput}
          className="comment-input__close-button"
        >
          ✖
        </button>
      </section>
      <form onSubmit={sendComment}>
        <textarea
          className="comment-input__textarea"
          value={message}
          onChange={(event) => recordMessage(event.target.value)}
        />
        {
          loading
            ? <Loader closeCommentInput={closeCommentInput} />

            : <input
                type="submit"
                className="comment-input__add-comment-button"
                value="ADD COMMENT"
              />
        }
      </form>
    </div>
  );
};

export default CommentInput;