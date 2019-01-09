import React, { Component } from "react";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utils/paginate";

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: getMovies(),
      pageSize: 4,
      currentPage: 1
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handlePageChanges = this.handlePageChanges.bind(this);
  }

  handleDelete(movie) {
    const movies = [...this.state.movies].filter(m => m !== movie);
    this.setState({ movies });
  }

  handleLike(movie) {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  }

  handlePageChanges(page) {
    this.setState({ currentPage: page });
  }

  render() {
    const { movies: allMovies, pageSize, currentPage } = this.state;
    const movies = paginate(allMovies, currentPage, pageSize);
    return movies.length > 0 ? (
      <React.Fragment>
        <h3>There are {allMovies.length} Movies Available</h3>
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
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
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
        <Pagination
          items={allMovies.length}
          pageSize={pageSize}
          onPageChanges={this.handlePageChanges}
          currentPage={currentPage}
        />
      </React.Fragment>
    ) : (
      <h3>There are no movies in the database.</h3>
    );
  }
}
