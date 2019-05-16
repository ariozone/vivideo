import http from "./httpServices"

const url = "http://localhost:3900/api/movies"

export function getMovies() {
  return http.get(url)
}

export function deleteMovie(movieId) {
  return http.delete(url + "/" + movieId)
}
