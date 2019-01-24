import React from "react";
import Form from "./common/form";

export default class RegisterForm extends Form {
  state = {
    data: { username: "", password: "" },
    error: {}
  };
  render() {
    return (
      <div>
        <h1>Register</h1>;{this.renderInput("username", "Username", "email")}
        {this.renderInput("password", "Password", "password")}
        {this.renderInput("name", "Name")}
        {this.renderButton("Register")}
      </div>
    );
  }
}
