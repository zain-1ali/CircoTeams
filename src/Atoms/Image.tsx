import React from "react";
import { ImageProps } from "../Types";

const Image: React.FC<ImageProps> = ({ src, classes }) => {
  return (
    <>
      <img src={src} alt="img" className={classes} />
    </>
  );
};

export default Image;
