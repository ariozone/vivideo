import React from "react"
import Form from "./common/form"
import Joi from "joi-browser"
import { getMovie, saveMovie } from "../services/movieService"
import { getGenres } from "../services/genreService"
import { toast } from "react-toastify"

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

  async populateMovie() {
    try {
      const selectedMovie = this.props.match.params.id
      if (selectedMovie === "new") return
      const { data: movie } = await getMovie(selectedMovie)
      this.setState({ data: this.createViewModel(movie) })
    } catch (error) {
      if (error.response && error.response.status === 404)
        return this.props.history.replace("/not-found")
    }
  }

  async componentDidMount() {
    const { data: genres } = await getGenres()
    this.setState({ genres })

    await this.populateMovie()
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

  async doSubmit() {
    await saveMovie(this.state.data)
    this.props.history.push("/")
    toast.success("Submitted!")
  }

  render() {
    return (
      <div>
        <h1 className="m-2">Movie Form</h1>
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
