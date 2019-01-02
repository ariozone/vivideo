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
    return (
      <table className="table">
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
          {this.state.movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td />
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
    );
  }
}
