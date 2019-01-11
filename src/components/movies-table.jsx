import React from "react";
import Like from "./common/like";

export default function MoviesTable(props) {
  const { movies, onDelete, onLike } = props;
  return (
    <table className="table m-2">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Genre</th>
          <th scope="col">Stock</th>
          <th scope="col">Rate</th>
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
