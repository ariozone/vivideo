import React from "react"
import Joi from "joi-browser"
import Form from "./common/form"
import { Redirect } from "react-router-dom"
import { login, getCurrentUser } from "../services/authenticationService"
import { toast } from "react-toastify"

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
      toast.success(`You are logged in!`)
      const state = this.props.location.state
      setTimeout(() => (window.location = state ? state.referrer : "/"), 1000)
    } catch (err) {
      if (err.response && err.response.status === 400) {
        const errors = { ...this.state.errors }
        errors.username = err.response.data
        this.setState({ errors })
        toast.error("Login Error!")
      }
    }
  }

  render() {
    return getCurrentUser() ? (
      <Redirect to='/' />
    ) : (
      <div>
        <h1 className='my-5'>Login</h1>

        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

          {this.renderButton("Login")}
        </form>
      </div>
    )
  }
}
