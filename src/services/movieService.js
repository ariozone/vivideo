import http from "./httpServices"

export function getMovies() {
  const endPoint = "http://localhost:3900/api/movies"
  return http.get(endPoint)
}
