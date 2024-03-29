import React, { useState } from "react";
import Navigation from "./Navigation";
import Content from './Content';
import CommentInput from "./CommentInput";

import '../styles/App.css';

const App = () => {
  const [navIsVisible, toggleNavVisibility] = useState(false);

  const [commentInputIsVisible, toggleCommentInputVisibility] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        className="navigation-visibility-toggle"
        id="nav-toggle"
        onChange={() => toggleNavVisibility(!navIsVisible)}
      />
      <Navigation />
      <label htmlFor="nav-toggle" className="navigation-visibility-label">
        {
          navIsVisible ? <span style={{marginLeft: "0px"}}>✖</span> : '➡'
        }
      </label>

      <Content toggleCommentInputVisibility={toggleCommentInputVisibility} />

      <CommentInput
        isVisible={commentInputIsVisible}
        toggleVisibility={toggleCommentInputVisibility}
      />
    </div>
  );
}

export default App;