import React, { Component } from "react";
import Navigation from "./Navigation";
import Content from './Content';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <input type="checkbox" className="navigation-visibility-toggle" id="nav-toggle"/>
        <Navigation />
        <label htmlFor="nav-toggle" className="navigation-visibility-label">➡</label>

        <Content />
      </div>
    );
  }
}

export default App;