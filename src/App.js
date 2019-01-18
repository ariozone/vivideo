import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Customers from "./components/customers";
import MovieForm from "./components/movie-form";
import NotFound from "./components/not-found";
import Rentals from "./components/rentals";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Movies />
        <Switch>
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/movie-form" component={MovieForm} />
          <Route path="/not-found" component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default App;
