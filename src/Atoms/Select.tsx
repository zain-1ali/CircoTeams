import React from "react";
import { selectProps } from "../Types";


const Select: React.FC<selectProps> = ({
  onChange,
  options,
  classes,
  value,
}) => {
  return (
    <select onChange={onChange} className={classes}>
      {options.map((option) => (
        <option key={option.value} value={option.value} selected = { option.value == value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
