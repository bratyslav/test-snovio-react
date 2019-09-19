import React, { useState } from 'react';

const ContentItem = ({ post }) => {
  const [isHover, toggleHover] = useState(false);

  return (
    <div  className="content-item__wrapper">
      <div
        className="content-item"
        onMouseOver={() => toggleHover(true)}
        onMouseLeave={() => toggleHover(false)}
      >
        <div className="content-item__title-wrapper">
          <h3 className="content-item__title">{post.title}</h3>
        </div>
        <div className="content-item__body">
          {post.body}
        </div>
        <div className="content-item__comments-count">
          <svg className="comments-icon"><g><ellipse id="ellipse" cx="6" cy="6" rx="6" ry="5" /><path id="triangle" d="M2 9, 4 10, 0 13" /></g></svg>
          &nbsp;{post.comments.length}
        </div>
      </div>

      <div
        className="content-item-active"
        onMouseOver={() => toggleHover(true)}
        onMouseLeave={() => toggleHover(false)}
        style={isHover ? {"display": "block"} : {"display": "none"}}
      >
        <div className="content-item__title-wrapper">
          <h3 className="content-item__title">{post.title}</h3>
        </div>
        <div>
          {post.body}
        </div>
        <div className="content-item__comments-count">
          <svg className="comments-icon"><g><ellipse id="ellipse" cx="6" cy="6" rx="6" ry="5" /><path id="triangle" d="M2 9, 4 10, 0 13" /></g></svg>
          {post.comments.length}
        </div>

        <div className="content-item-active__comments-header">Comments</div>

        {
          post.comments.map(comment => (
            <div className="content-item-active__comment">{comment} <hr /></div>
          ))
        }
      </div>
    </div>
  );
};

export default ContentItem;