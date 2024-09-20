// import React from 'react'

import { radioProps } from "../Types";

const Radio: React.FC<radioProps> = ({ classes }) => {
  return <input type="radio" className={classes} />;
};

export default Radio;
