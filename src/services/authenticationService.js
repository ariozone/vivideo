import http from "./httpServices"
import { url } from "../config.json"
import jwtDecode from "jwt-decode"

const endPoint = url + "/logins"

export async function login(email, password) {
  const response = await http.post(endPoint, { email, password })
  localStorage.setItem("token", response.data)
}

export function loginUponRegistration(token) {
  localStorage.setItem(token)
}

export function logout() {
  localStorage.removeItem("token")
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token")
    return jwtDecode(jwt)
  } catch (err) {
    return null
  }
}

export function getJwt() {
  return localStorage.getItem("token")
}

const token = getJwt()
if (token) http.setHeaders(getJwt())
