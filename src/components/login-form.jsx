import React, { Component } from "react";
import Input from "./common/input";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: { username: "", password: "" },
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.validateProperty = this.validateProperty.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log("Submited!");
  }

  handleChange({ currentTarget: input }) {
    const error = this.validateProperty(input);
    const errors = { ...this.state.errors };
    if (error) {
      errors[input.name] = error;
    } else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  }

  validate() {}

  validateProperty(input) {
    if (input.name === "username" && input.value.trim() === "") {
      return "Username is required";
    }
    if (input.name === "password" && input.value.trim() === "") {
      return "Password is required";
    }
  }

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />

          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}
