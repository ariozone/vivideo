import React, { Component } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
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
import { getCurrentUser } from "./services/authenticationService"
import "react-toastify/dist/ReactToastify.css"
import "./App.css"

class App extends Component {
  state = {
    user: {}
  }
  componentDidMount() {
    const user = getCurrentUser()
    this.setState({ user })
  }

  render() {
    const { user } = this.state
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <Route
              path="/movies/:id"
              render={props => {
                if (!user) return <Redirect to="/login" />
                return <MovieForm {...props} />
              }}
            />
            <Route
              path="/movies"
              render={props => <Movies user={user} {...props} />}
            />
            <Route
              path="/me"
              render={props => <Profile user={user} {...props} />}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/movie-form" component={MovieForm} />
            } />
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
