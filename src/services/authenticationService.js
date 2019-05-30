import http from "./httpServices"
import { url } from "../config.json"

const endPoint = url + "/logins"

export function login(email, password) {
  return http.post(endPoint, { email, password })
}
