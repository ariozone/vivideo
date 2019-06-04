import React from "react"

export default class Logout extends React.Component {
  componentDidMount() {
    localStorage.removeItem("token")
    window.location = "/"
  }
  render() {
    return <h1>Logged Out</h1>
  }
}
