import React from "react";

export default function Select(props) {
  const { name, label, items, error, ...rest } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest} className="form-control">
        <option value="" />
        {items.map(genre => (
          <option key={genre._id} value={genre.name}>
            {genre.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}
