import http from "./httpServices"

const endPoint = "/customers"

export function getCustomers() {
  return http.get(endPoint)
}

export function saveCustomer(customer) {
  return http.post(endPoint, customer)
}
