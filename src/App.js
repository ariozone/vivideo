import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";
import { Route } from "react-router-dom";
import Customers from "./components/customers";
import MovieForm from "./components/movie-form";
import NotFound from "./components/not-found";
import Rentals from "./components/rentals";

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
