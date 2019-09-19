import React from 'react';

const ContentItem = ({ post }) => {
  return (
    <div className="content-item">
      <div className="content-item__title-wrapper">
        <h3 className="content-item__title">{post.title}</h3>
      </div>
      <div>
        {post.body}
      </div>
      <div>
        <svg className="comments-icon"><g><ellipse id="ellipse" cx="6" cy="6" rx="6" ry="5" /><path id="triangle" d="M2 9, 4 10, 0 13" /></g></svg>
      </div>
    </div>
  );
};

export default ContentItem;