import React from "react";
import "./App.css";
import SongOverview from "./Components/SongOverview";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul class="menuBar">
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/about">About this page</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <SongOverview />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return (
    <div>
      <h2>About this page:</h2>
      <p>
        This is a small personal playlist maker, created with React. Add songs
        you like to create your own playlist
      </p>
    </div>
  );
}

export default App;
