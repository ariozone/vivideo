import React from "react";
import Form from "./common/form";
import { Joi } from "joi-browser";

export default class MovieForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: { title: "", genre: "", stock: "", rate: "" },
      errors: {}
    };
    // this.handleSave = this.handleSave.bind(this);
  }
  schema = {
    title: Joi.String(),
    genre: Joi.String(),
    stock: Joi.Number(),
    rate: Joi.Number()
  };
  handleSave() {
    this.props.history.push("/");
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <h1 className="m-2">The Movie Id is: {match.params.id}</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title", "text")}
          {this.renderInput("genre", "Genre", "text")}
          {this.renderInput("stock", "Stock", "number")}
          {this.renderInput("rate", "rate", "number")}
          {this.renderButton("Save")}
          {/* <button className="btn btn-secondary m-2" onClick={this.handleSave}>
          Save
        </button> */}
        </form>
      </div>
    );
  }
}
