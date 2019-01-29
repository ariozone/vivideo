import React from "react";
export default function SearchInput(props) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        name="search"
        className="form-control"
        placeholder="Search..."
        aria-label="Search"
        onChange={event => this.props.onChange(event.target.props.value)}
      />
    </div>
  );
}
