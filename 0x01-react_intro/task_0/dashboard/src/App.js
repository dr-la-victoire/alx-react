import React from "react";
import "./App.css";
import HolbertonLogo from "./images/holberton_logo.jpg";

function App() {
  return (
    <div id="root">
      <header className="App-header">
        <img src={HolbertonLogo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
