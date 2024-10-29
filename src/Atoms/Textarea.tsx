import React from "react";
import { textAreaProps } from "../Types";

const Textarea: React.FC<textAreaProps> = ({
  onTextChange,
  value,
  classes,
  placeholder,
}) => {
  return (
    <>
      <textarea
        onChange={onTextChange}
        value={value}
        className={classes}
        placeholder={placeholder}
      />
    </>
  );
};

export default Textarea;
