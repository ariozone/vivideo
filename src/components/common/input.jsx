import React from "react";

export default function Form(props) {
  return (
    <div className="form-group">
      <label htmlFor="username">Username</label>
      <input
        type="text"
        className="form-control"
        name="username"
        id="username"
        value={account.username}
        onChange={this.handleChange}
      />
    </div>
  );
}
