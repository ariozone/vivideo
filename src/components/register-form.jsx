import React from "react"
import Joi from "joi-browser"
import Form from "./common/form"
import { register } from "../services/userServices"

export default class RegisterForm extends Form {
  constructor(props) {
    super(props)
    this.state = {
      data: { username: "", password: "", user: "" },
      errors: {}
    }
    this.doSubmit = this.doSubmit.bind(this)
  }
  schema = {
    username: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
      .label("Username"),
    password: Joi.string()
      .min(5)
      .required()
      .label("Password"),
    user: Joi.string().required()
  }

  doSubmit() {
    console.log("Submitted!")
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("user", "Name", "text")}
          {this.renderButton("Register")}
        </form>
      </div>
    )
  }
}
