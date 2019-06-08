import React, { Fragment } from "react"
import { getCurrentUser } from "../services/authenticationService"

const Profile = props => {
  const user = getCurrentUser()
  return (
    <Fragment>
      <h1>{props.user.name}'s Profile</h1>
      <h4>{user.isAdmin ? "Admin" : "User"}</h4>
    </Fragment>
  )
}

export default Profile
