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
    const { username, password } = this.state.data
    const result = await login(username, password)
    console.log(result)
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
