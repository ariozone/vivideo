import React from "react"
import { logout } from "../services/authenticationService"

export default class Logout extends React.Component {
  componentDidMount() {
    logout()
    window.location = "/"
  }
  render() {
    return null
  }
}
