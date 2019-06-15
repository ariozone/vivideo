import http from "./httpServices"

const endPoint = "/customers"

export function getCustomers() {
  return http.get(endPoint)
}
