import http from "./httpServices"

const endPoint = "/movies"
export function getMovies() {
  return http.get(endPoint)
}

export function deleteMovie(movieId) {
  return http.delete(endPoint + "/" + movieId)
}

export function getMovie(movieId) {
  return http.get(endPoint + "/" + movieId)
}

export function saveMovie(movie) {
  if (!movie._id) {
    return http.post(endPoint, movie)
  }

  const movieBody = { ...movie }
  delete movieBody._id
  return http.put(endPoint + "/" + movie._id, movieBody)
}
