import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

export default class RegisterForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: { username: "", password: "", user: "" },
      errors: {}
    };
    this.doSubmit = this.doSubmit.bind(this);
  }
  schema = {
    username: Joi.string(),
    password: Joi.string(),
    user: Joi.string()
  };
  doSubmit() {
    console.log("Submitted!");
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
    );
  }
}
