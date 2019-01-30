import React from "react";
export default function SearchInput(props) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        name="search"
        value={props.value}
        className="form-control"
        placeholder="Search..."
        aria-label="Search"
        onChange={event => props.onChange(event.target.value)}
      />
    </div>
  );
}
