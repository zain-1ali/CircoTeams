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
  style,
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
        style={style}
        autoComplete="off"
      />
    </>
  );
};

export default Input;
