import React from "react"
import { Route, Redirect } from "react-router-dom"
import { getCurrentUser } from "../../services/authenticationService"
const ProtectedRoute = props => {
  const user = getCurrentUser()
  return (
    <Route
      path={props.path}
      render={props => {
        if (!user) return <Redirect to="/login" />
        return <MovieForm {...props} />
      }}
    />
  )
}

export default ProtectedRoute
