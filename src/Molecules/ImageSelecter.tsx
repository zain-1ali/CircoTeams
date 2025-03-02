import React, { useRef, useState } from "react";
import Text from "../Atoms/Text";
import Image from "../Atoms/Image";
import { imageSelectProps } from "../Types";
import lockedIcon from "../assets/images/locked.png";
import unlockedIcon from "../assets/images/unlocked.png";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";

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
  onRemove,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div
      className={containerClasse + " relative"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
      <div
      // onClick={disabled ? () => {} : handleClick}
      >
        <Image src={image} classes={imgClasses} />
      </div>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={(e) => handleFileChange(e, text)}
      />

      {isHovered && (
        <div
          className={
            `absolute inset-0 top-[18px] ${
              isTemplate && text === "Profile Image" ? "left-[5px]" : ""
            } bg-black bg-opacity-50 flex items-center justify-center cursor-pointer gap-2 ` +
            imgClasses
          }
        >
          {disabled ? (
            <>
              <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-200 transition">
                <FaLock className="text-primary" />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleClick}
                className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-200 transition"
              >
                <FaEdit className="text-primary" />
              </button>
              <button
                onClick={onRemove}
                className="p-2 bg-white rounded-full shadow-lg hover:bg-red-200 transition"
              >
                <FaTrash className="text-red-600" />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageSelecter;
