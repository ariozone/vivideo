import React from "react"
import Joi from "joi-browser"
import Form from "./common/form"
import { register } from "../services/userServices"
import { toast } from "react-toastify"
import { loginUponRegistration } from "../services/authenticationService"

export default class RegisterForm extends Form {
  constructor(props) {
    super(props)
    this.state = {
      data: { email: "", password: "", name: "" },
      errors: {}
    }
  }

  schema = {
    email: Joi.string()
      .required()
      .label("Username")
      .email(),
    password: Joi.string()
      .min(6)
      .required()
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  }

  doSubmit = async () => {
    try {
      const response = await register(this.state.data)
      loginUponRegistration(response.headers["x-auth-token"])
      window.location = "/"
      toast.success("You are now registered and logged in!")
    } catch (err) {
      if (err.response && err.response.status === 400) {
        const errors = { ...this.state.errors }
        errors.email = "User is already registered!"
        errors.password = err.response.data
        this.setState({ errors })
      }
    }
  }

  render() {
    const helpPassword =
      "Password must be at least 6 characters including one upper case, one lower case, one number and one special character."
    const helpUsername = "Username must be a valid email."

    return (
      <div>
        <h1 className="my-5">Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Username", "text", helpUsername)}
          {this.renderInput("password", "Password", "password", helpPassword)}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    )
  }
}
