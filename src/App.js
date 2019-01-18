import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Customers from "./components/customers";
import MovieForm from "./components/movie-form";
import NotFound from "./components/not-found";
import Rentals from "./components/rentals";
import NavBar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          {/* <Movies /> */}
          <Switch>
            <Route path="/movies" component={Movies} />
            <Redirect path="/home" exact to="/movies" />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/movie-form" component={MovieForm} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
