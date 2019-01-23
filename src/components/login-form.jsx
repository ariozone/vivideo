import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { username: "", password: "" },
      errors: {}
    };
    this.doSubmit = this.doSubmit.bind(this);
  }
  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };
  doSubmit() {
    console.log("Submitted!");
  }
  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={data.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />

          <Input
            name="password"
            value={data.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />

          <button
            type="submit"
            className="btn btn-primary"
            disabled={this.validate()}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}
