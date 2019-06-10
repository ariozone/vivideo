import axios from "axios"
import { toast } from "react-toastify"

function setHeaders(token) {
  axios.defaults.headers.common["x-auth-token"] = token
}

axios.interceptors.response.use(null, error => {
  const clientError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500

  if (!clientError) {
    console.log(error)
    toast.error("Something went wrong!")
  }
  return Promise.reject(error)
})
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setHeaders
}
