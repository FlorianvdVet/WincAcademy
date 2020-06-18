import React from "react";
import "./App.css";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Dashboard</h1>
        <Container />
      </header>
      <footer className="App-footer">
        <p>Onderkant</p>
      </footer>
    </div>
  );
}

export default App;
