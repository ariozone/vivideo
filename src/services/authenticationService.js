import http from "./httpServices"
import { url } from "../config.json"

const endPoint = url + "/logins"

export async function login(email, password) {
  const response = await http.post(endPoint, { email, password })
  localStorage.setItem("token", response.data)
}
