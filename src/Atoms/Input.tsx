import React from "react";
import { inputProps } from "../Types";

const Input: React.FC<inputProps> = ({
  type,
  onChange,
  value,
  classes,
  placeholder,
  disabled,
  maxLength,
}) => {
  return (
    <>
      <input
        type={type}
        onChange={onChange}
        value={value}
        className={classes}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength}
      />
    </>
  );
};

export default Input;
