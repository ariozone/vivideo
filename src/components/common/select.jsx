import React from "react";

export default function Select(props) {
  const { name, label, items, error } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} className="form-control">
        <option value="" />
        {items.map(genre => (
          <option key={genre._id} value={genre._id}>
            {genre.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}
