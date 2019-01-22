import React from "react";

export default function Form(props) {
  return (
    <div className="form-group">
      <label htmlFor="props.name">{props.name}</label>
      <input
        type="text"
        className="form-control"
        name={props.name}
        id={props.name}
        value={account.username}
        onChange={props.handleChange}
      />
    </div>
  );
}
