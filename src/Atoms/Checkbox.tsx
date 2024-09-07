import React from "react";
import { checkboxProps } from "../Types";

const Checkbox: React.FC<checkboxProps> = ({
  checkValue,
  onChange,
  classes,
}) => {
  return (
    <>
      <input
        type="checkbox"
        checked={checkValue}
        onChange={onChange}
        className={classes}
      />
    </>
  );
};

export default Checkbox;
