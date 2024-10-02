import React, { useRef } from "react";
import Text from "../Atoms/Text";
import Image from "../Atoms/Image";
import { imageSelectProps } from "../Types";

const ImageSelecter: React.FC<imageSelectProps> = ({
  image,
  text,
  textClasses,
  imgClasses,
  containerClasse,
  handleFileChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={containerClasse}>
      <Text text={text} classes={textClasses} />
      <div onClick={handleClick}>
        <Image src={image} classes={imgClasses} />
      </div>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={(e) => handleFileChange(e, text)}
      />
    </div>
  );
};

export default ImageSelecter;
