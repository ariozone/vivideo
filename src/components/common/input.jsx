import React from "react";

export default function Input({ name, label, value, handleChange }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        className="form-control"
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
