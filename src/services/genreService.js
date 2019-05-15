import http from "./httpServices"

// const endPoint = "http://localhost:3900/api/genres"

export function getGenres() {
  return http.get("http://localhost:3900/api/genres")
}
