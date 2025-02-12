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
  ref,
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
        ref={ref}
      />
    </>
  );
};

export default Input;
