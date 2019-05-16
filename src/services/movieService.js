import http from "./httpServices"

export function getMovies() {
  const endPoint = "http://localhost/api/movies"
  http.get(endPoint)
}
