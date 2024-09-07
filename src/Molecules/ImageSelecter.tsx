import React from "react";
import Text from "../Atoms/Text";
import Image from "../Atoms/Image";
import { imageSelectProps } from "../Types";

const ImageSelecter: React.FC<imageSelectProps> = ({
  image,
  text,
  textClasses,
  imgClasses,
  containerClasse,
}) => {
  return (
    <div className={containerClasse}>
      <Text text={text} classes={textClasses} />
      <Image src={image} classes={imgClasses} />
    </div>
  );
};

export default ImageSelecter;
