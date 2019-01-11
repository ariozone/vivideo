import React, { Component } from "react";
import Pagination from "./common/pagination";
import ListGroup from "./common/list-group";
import MoviesTable from "./movies-table";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genres: [],
      pageSize: 4,
      currentPage: 1,
      selectedGenre: "All Genres"
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handlePageChanges = this.handlePageChanges.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres
    });
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

  handleSelect(genre) {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  }

  render() {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      genres,
      selectedGenre
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(movie => movie.genre._id === selectedGenre._id)
        : allMovies;

    const movies = paginate(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            onGenreSelect={this.handleSelect}
            selectedGenre={selectedGenre}
          />
        </div>

        <div className="col">
          <h3>
            There are {filtered.length}{" "}
            {selectedGenre.name === "All Genres" ? "" : selectedGenre.name}{" "}
            Movies Available.
          </h3>

          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
          />

          <Pagination
            items={filtered.length}
            pageSize={pageSize}
            onPageChanges={this.handlePageChanges}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}
