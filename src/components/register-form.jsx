import React from "react"
import Joi from "joi-browser"
import Form from "./common/form"
import { register } from "../services/userServices"
import { toast } from "react-toastify"

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
    await register(this.state.data)
    this.props.history.push("/")
    toast.success("You are now registered!")
  }

  render() {
    return (
      <div>
        <h1 className="m-2">Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    )
  }
}
