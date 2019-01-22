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
    console.log(errors);
    this.setState({ errors });
    console.log("Submited!");
  }
  handleChange({ currentTarget: input }) {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  }
  validate() {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "") {
      errors.username = "Username is required!";
    }
    if (account.password.trim() === "") {
      errors.password = "Password is required!";
    }
    return (errors.length = 0 ? null : errors);
  }

  validateProperty() {
    console.log("");
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
