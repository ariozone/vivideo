import http from "./httpServices"

const endPoint = "/customers"

export function getCustomers() {
  return http.get(endPoint)
}

export function getCustomer(customerId) {
  return http.get(endPoint + "/" + customerId)
}

export function saveCustomer(customer) {
  if (!customer._id) {
    return http.post(endPoint, customer)
  }
  const customerBody = { ...customer }
  delete customerBody._id
  return http.put(endPoint + "/" + customer._id, customerBody)
}
