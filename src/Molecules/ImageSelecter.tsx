import React, { useRef } from "react";
import Text from "../Atoms/Text";
import Image from "../Atoms/Image";
import { imageSelectProps } from "../Types";
import lockedIcon from "../assets/images/locked.png";
import unlockedIcon from "../assets/images/unlocked.png";

const ImageSelecter: React.FC<imageSelectProps> = ({
  image,
  text,
  textClasses,
  imgClasses,
  containerClasse,
  handleFileChange,
  isTemplate = false,
  locked,
  changeLockedStatus = () => {},
  disabled = false,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={containerClasse}>
      <div className="flex items-center gap-2">
        <Text text={text} classes={textClasses} />
        {isTemplate && (
          <div onClick={() => changeLockedStatus()}>
            <Image
              classes="h-[17px] w-[17px] cursor-pointer"
              src={locked ? lockedIcon : unlockedIcon}
            />
          </div>
        )}
      </div>
      <div onClick={disabled ? () => {} : handleClick}>
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
