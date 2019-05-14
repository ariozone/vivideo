import axios from "axios"

axios.interceptors.response.use(null, error => {
  const clientError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500
  if (!clientError) {
    // Log the error
    alert("Something went wrong!")
  }
  return Promise.reject(error)
})
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
}
