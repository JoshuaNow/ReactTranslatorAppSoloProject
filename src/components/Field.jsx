import React from "react";

function Field(props) {
  const { label, value, onChange } = props;
  return (
    <div>
      <label> {label} </label>
      <input
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default Field;
