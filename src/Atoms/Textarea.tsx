import React from "react";
import { inputProps } from "../Types";

const Textarea: React.FC<inputProps> = ({
  onChange,
  value,
  classes,
  placeholder,
}) => {
  return (
    <>
      <textarea
        onChange={onChange}
        value={value}
        className={classes}
        placeholder={placeholder}
      />
    </>
  );
};

export default Textarea;
