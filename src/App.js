import React, { Component } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import jwtDecode from "jwt-decode"
import Movies from "./components/movies"
import Customers from "./components/customers"
import MovieForm from "./components/movie-form"
import NotFound from "./components/not-found"
import Rentals from "./components/rentals"
import LoginForm from "./components/login-form"
import RegisterForm from "./components/register-form"
import NavBar from "./components/navbar"
import Profile from "./components/profile"
import Logout from "./components/logout"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./App.css"

class App extends Component {
  state = {
    user: {}
  }
  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token")
      const user = jwtDecode(jwt)
      this.setState({ user })
    } catch (err) {}
  }

  render() {
    const { user } = this.state
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/movie-form" component={MovieForm} />
            <Route
              path="/me"
              render={props => <Profile user={user} {...props} />}
            />
            <Route path="/logout" component={Logout} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    )
  }
}

export default App
