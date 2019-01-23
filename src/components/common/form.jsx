import React, { Component } from "react";
import Joi from "joi-browser";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.validateProperty = this.validateProperty.bind(this);
  }

  validate() {
    const { error } = Joi.validate(this.state.data, this.schema, {
      abortEarly: false
    });
    if (!error) return null;

    const target = error.details;
    const errors = {};
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
  handleSubmit(e) {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
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
}
