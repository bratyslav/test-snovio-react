import React, { useState } from "react";
import Navigation from "./Navigation";
import Content from './Content';

import '../styles/App.css';

const App = () => {
  const [navIsVisible, toggleNavVisibility] = useState(false);

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
          navIsVisible ? <span style={{marginLeft: "7px"}}>x</span> : '➡'
        }
      </label>

      <Content />
    </div>
  );
}

export default App;