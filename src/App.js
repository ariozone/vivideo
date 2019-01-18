import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Movies />
      </main>
    );
  }
}

export default App;
