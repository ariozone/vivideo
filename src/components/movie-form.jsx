import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

export default class MovieForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: { title: "", genre: "", stock: "", rate: "" },
      errors: {},
      genres: []
    };
    this.doSubmit = this.doSubmit.bind(this);
  }
  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genre: Joi.string()
      .required()
      .label("Genre"),
    stock: Joi.number()
      .label("Stock")
      .required()
      .min(0)
      .max(100),
    rate: Joi.number()
      .required()
      .label("Rate")
      .min(0)
      .max(10)
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const selectedMovie = this.props.match.params.id;
    if (selectedMovie === "new") return;
    const movie = getMovie(selectedMovie);
    !movie
      ? this.props.history.replace("/not-found")
      : this.setState({ data: movie });
  }

  doSubmit() {
    this.props.history.push("/");
    console.log("Submitted!");
  }
  render() {
    const { match } = this.props;
    return (
      <div>
        <h1 className="m-2">The Movie Id is: {match.params.id}</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title", "text")}
          {this.renderSelect("genre", "Genre", this.state.genres)}
          {this.renderInput("stock", "Stock", "number")}
          {this.renderInput("rate", "Rate", "number")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}
