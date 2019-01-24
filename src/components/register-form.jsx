import React from "react";
import Form from "./common/form";

export default class RegisterForm extends Form {
  state = {
    data: { username: "", password: "" },
    error: {}
  };
  render() {
    return <h1>Register</h1>;
  }
}
