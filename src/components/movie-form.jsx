import React from "react"
import Form from "./common/form"
import Joi from "joi-browser"
import { getMovie, saveMovie } from "../services/fakeMovieService"
import { getGenres } from "../services/fakeGenreService"

export default class MovieForm extends Form {
  constructor(props) {
    super(props)
    this.state = {
      data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
      errors: {},
      genres: []
    }
    this.doSubmit = this.doSubmit.bind(this)
    this.createViewModel = this.createViewModel.bind(this)
  }
  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .label("Stock")
      .required()
      .min(0)
      .max(100),
    dailyRentalRate: Joi.number()
      .required()
      .label("Rate")
      .min(0)
      .max(10)
  }

  componentDidMount() {
    const genres = getGenres()
    this.setState({ genres })

    const selectedMovie = this.props.match.params.id
    if (selectedMovie === "new") return
    const movie = getMovie(selectedMovie)
    if (!movie) return this.props.history.replace("/not-found")
    this.setState({ data: this.createViewModel(movie) })
  }
  createViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate
    }
  }
  doSubmit() {
    saveMovie(this.state.data)
    this.props.history.push("/")
    console.log("Submitted!")
  }
  render() {
    const { match } = this.props
    return (
      <div>
        <h1 className="m-2">The Movie Id is: {match.params.id}</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title", "text")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate", "number")}
          {this.renderButton("Save")}
        </form>
      </div>
    )
  }
}
