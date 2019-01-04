import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: getMovies()
    };

    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(movie) {
    // console.log(movie);
    const movies = [...this.state.movies].filter(m => m !== movie);
    this.setState({ movies });
  }
  render() {
    const liked = false;
    const { movies } = this.state;
    return movies.length > 0 ? (
      <React.Fragment>
        <h3>There are {movies.length} Movies Available</h3>
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
            {movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  {liked ? (
                    <i className="fas fa-heart" />
                  ) : (
                    <i class="far fa-heart" />
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => this.handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    ) : (
      <h3>There are no movies in the database.</h3>
    );
  }
}
