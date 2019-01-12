import React, { Component } from "react";
import Like from "./common/like";

export default class MoviesTable extends Component {
  raiseSort(path) {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  }

  render() {
    const { movies, onDelete, onLike } = this.props;
    return (
      <table className="table m-2">
        <thead className="thead-dark">
          <tr>
            <th scope="col" onClick={() => this.raiseSort("title")}>
              Title
            </th>
            <th scope="col" onClick={() => this.raiseSort("genre.name")}>
              Genre
            </th>
            <th scope="col" onClick={() => this.raiseSort("numberInStock")}>
              Stock
            </th>
            <th scope="col" onClick={() => this.raiseSort("dailyRentalRate")}>
              Rate
            </th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody>
          {movies.length > 0
            ? movies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like liked={movie.liked} onClick={() => onLike(movie)} />
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => onDelete(movie)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    );
  }
}
