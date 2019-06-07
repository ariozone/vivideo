import React from "react"
import { Route, Redirect } from "react-router-dom"
import { getCurrentUser } from "../../services/authenticationService"

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  const user = getCurrentUser()
  return (
    <Route
      {...rest}
      path={path}
      render={props => {
        console.log(props)
        if (!user)
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { referrer: props.location.pathname }
              }}
            />
          )
        return Component ? <Component {...props} /> : render(props)
      }}
    />
  )
}

export default ProtectedRoute
