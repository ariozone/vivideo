import React, { Component } from "react";
import { Link } from "react-router-dom";
import MoviesTable from "./movies-table";
import Pagination from "./common/pagination";
import ListGroup from "./common/list-group";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import SearchInput from "./common/search-input";

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genres: [],
      pageSize: 4,
      currentPage: 1,
      selectedGenre: "All Genres",
      sortColumn: { path: "title", order: "asc" },
      searchInput: ""
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handlePageChanges = this.handlePageChanges.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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
    this.setState({ selectedGenre: genre, currentPage: 1, searchInput: "" });
  }

  handleSort(sortColumn) {
    this.setState({ sortColumn });
  }

  handleSearch(searchKeyword) {
    this.setState({
      searchInput: searchKeyword,
      currentPage: 1,
      selectedGenre: ""
    });
  }

  render() {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      genres,
      selectedGenre,
      sortColumn,
      searchInput
    } = this.state;

    let filtered = allMovies;
    searchInput
      ? (filtered = searchInput)
      : (filtered =
          selectedGenre && selectedGenre._id
            ? allMovies.filter(movie => movie.genre._id === selectedGenre._id)
            : allMovies);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

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
          <Link className="btn btn-outline-primary" to="movies/new">
            Add New
          </Link>
          <h4 className="m-3">
            There are {filtered.length}{" "}
            {selectedGenre.name === "All Genres" ? "" : selectedGenre.name}{" "}
            Movies Available.
          </h4>
          <SearchInput
            onChange={this.handleSearch}
            value={this.state.searchInput}
          />
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={sortColumn}
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
