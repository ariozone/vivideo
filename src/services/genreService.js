import http from "./httpServices"
import { url } from "../config.json"

export function getGenres() {
  return http.get(url + "/genres")
}
