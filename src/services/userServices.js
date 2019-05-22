import http from "./httpServices"
import { url } from "../config.json"

const endPoint = url + "/users"

export function register(user) {
  return http.post(endPoint, {
    email: user.username,
    passoword: user.password,
    user: user.name
  })
}
