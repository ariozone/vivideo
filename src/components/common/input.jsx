import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input name={name} className="form-control" id={name} {...rest} />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
export default Input;
