import React from 'react';

const CommentInput = ({ isVisible, toggleVisibility }) => {
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
      <form>
        <textarea className="comment-input__textarea" />
        <input type="submit" className="comment-input__add-comment-button" value="ADD COMMENT"/>
      </form>
    </div>
  );
};

export default CommentInput;