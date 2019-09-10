import http from "./httpServices"
import jwtDecode from "jwt-decode"

const endPoint = "/logins"

export async function login(email, password) {
  const response = await http.post(endPoint, { email, password })
  localStorage.setItem("token", response.data)
}

export function loginUponRegistration(token) {
  localStorage.setItem("token", token)
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
