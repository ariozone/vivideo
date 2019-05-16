import http from "./httpServices"
import { url } from "../config.json"

export function getMovies() {
  return http.get(url + "/movies")
}

export function deleteMovie(movieId) {
  return http.delete(url + "/movies/" + movieId)
}

export function getMovie(movieId) {
  return http.get(url + "/movies/" + movieId)
}
export function saveMovie() {}
