import React from "react"
import Joi from "joi-browser"
import Form from "./common/form"
import { login } from "../services/authenticationService"

export default class LoginForm extends Form {
  constructor(props) {
    super(props)
    this.state = {
      data: { username: "", password: "" },
      errors: {}
    }
    this.doSubmit = this.doSubmit.bind(this)
  }

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  }

  async doSubmit() {
    try {
      const { username, password } = this.state.data
      await login(username, password)
    } catch (err) {
      if (err.response && err.response.status === 400) {
        const errors = { ...this.state.errors }
        errors.username = err.response.data
        this.setState({ errors })
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Login")}
        </form>
      </div>
    )
  }
}
