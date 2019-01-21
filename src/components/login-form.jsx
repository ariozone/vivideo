import React, { Component } from "react";

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <h1>Login</h1>

        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" className="form-control" id="password" />
          </div>
          <div className="form-check" />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
