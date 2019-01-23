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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.validateProperty = this.validateProperty.bind(this);
  }
  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };
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

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  }

  validate() {
    const errors = { ...this.state.errors };
    const { error } = Joi.validate(this.state.data, this.schema, {
      abortEarly: false
    });
    if (!error) return null;
    const target = error.details;
    for (let i = 0; i < target.length; i++) {
      errors[target[i].path[0]] = target[i].message;
    }
    return errors;
  }

  validateProperty({ name, value }) {
    const inputField = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(inputField, schema);
    return !error ? null : error.details[0].message;
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
