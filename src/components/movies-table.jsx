import React, { Component } from "react";
import TableHeader from "./common/table-header";
import Like from "./common/like";

export default class MoviesTable extends Component {
  render() {
    const columns = [
      { path: "title", label: "Title" },
      { path: "genre.name", label: "Genre" },
      { path: "numberInStock", label: "Stock" },
      { path: "dailyRentalRate", label: "Rate" },
      { key: "like", content: "like" },
      { key: "delete", content: "delete" }
    ];
    const { movies, onDelete, onLike } = this.props;
    return (
      <table className="table m-2">
        <TableHeader />
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
