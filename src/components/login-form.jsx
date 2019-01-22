import React, { Component } from "react";
import Input from "./common/input";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: { username: "", password: "" }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("Submited!");
  }
  handleChange({ currentTarget: input }) {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  }
  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.handleSubmit}>
          <Input />

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className="form-control"
              name="password"
              id="password"
              value={account.password}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-check" />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}
