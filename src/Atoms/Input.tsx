import React from "react";
import { inputProps } from "../Types";

const Input: React.FC<inputProps> = ({
  type,
  onChange,
  value,
  classes,
  placeholder,
}) => {
  return (
    <>
      <input
        type={type}
        onChange={onChange}
        value={value}
        className={classes}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
