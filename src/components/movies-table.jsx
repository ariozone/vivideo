import React, { Component } from "react"
import Like from "./common/like"
import Table from "./common/table"
import { Link } from "react-router-dom"

export default class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: movie => (
        <Link className="text-dark" to={`/movies/${movie._id}`}>
          {movie.title}
        </Link>
      )
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => (
        <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          className="btn btn-sm btn-danger"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      )
    }
  ]
  render() {
    const { movies, sortColumn, onSort } = this.props
    return (
      <Table
        items={movies}
        sortColumn={sortColumn}
        onSort={onSort}
        columns={this.columns}
      />
    )
  }
}
