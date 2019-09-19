import React from 'react';

const ContentItem = ({ post }) => {
  return (
    <div className="content-item__wrapper">
      <h3 className="content-item__title">{post.title}</h3>
    </div>
  );
};

export default ContentItem;