import React, { Component } from "react";
import Movies from "./components/movies";
import { Route, Switch, Redirect } from "react-router-dom";
import Customers from "./components/customers";
import MovieForm from "./components/movie-form";
import NotFound from "./components/not-found";
import Rentals from "./components/rentals";
import LoginForm from "./components/login-form";
import NavBar from "./components/navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movie-form" component={MovieForm} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
