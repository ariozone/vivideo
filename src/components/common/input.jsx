import React from "react";

const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        className="form-control"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default Input;
