import React, { useState } from 'react';
import Loader from "./Loader";

const CommentInput = ({ isVisible, toggleVisibility }) => {
  const [loading, startLoading] = useState(false);

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
          onClick={() => toggleVisibility(false)}
          className="comment-input__close-button"
        >
          ✖
        </button>
      </section>
      <form onSubmit={sendComment}>
        <textarea className="comment-input__textarea" />
        {
          loading
            ? <Loader toggleVisibility={toggleVisibility} />

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