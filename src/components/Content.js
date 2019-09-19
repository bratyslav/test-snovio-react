import React from 'react';
import { posts } from '../../API/API';
import ContentItem from "./ContentItem";

const Content = ({ toggleCommentInputVisibility }) => {
  return (
    <main className="content__wrapper">
      <section className="top-section">
        <form className="search">
          <label htmlFor="search">
            <div className="search__icon">⚲</div>
          </label>
          <input type="text" className="search__input" id="search" />
        </form>

        <img
          alt="avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuXgk28cnbUBSSM18oK_3YjcXDdnbiDLjNzRpqAs1_Xhu3uTb9"
          className="top-section__avatar"
        />
        <div className="top-section__triangle-icon">▼</div>
      </section>

      <h2 className="content__header">today</h2>

      <section className="content">
        {
          posts.map(post => (
            <ContentItem
              key={post.id}
              post={post}
              toggleCommentInputVisibility={toggleCommentInputVisibility}
            />
          ))
        }
      </section>
    </main>
  );
};

export default Content;