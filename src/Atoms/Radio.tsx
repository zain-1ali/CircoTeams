// import React from 'react'
import { radioProps } from "../Types";
const Radio: React.FC<radioProps> = ({ classes, checked, onChange }) => {
  return (
    <input
      type="radio"
      className={classes}
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Radio;
