import React, { Component } from "react";
import { Joi } from "joi-browser";

export default class Form extends Component {
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
    return <h1>Form</h1>;
  }
}
