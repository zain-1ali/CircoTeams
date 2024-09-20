// import React from "react";
import Image from "../Atoms/Image";
import Text from "../Atoms/Text";
import { imageWithTextProps } from "../Types";

const ImageWithTextCell: React.FC<imageWithTextProps> = ({
  containerClass,
  isAdmin,
}) => {
  return (
    <div className={containerClass}>
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdLZAJzeEA2iYjsrN4CEXrg8ATQ1tB04blQ&s"
        classes="h-[36px] w-[36px] rounded-full object-cover"
      />
      <Text text="Arrora gaur" classes="font-[600] text-[14px]" />
      {isAdmin && (
        <div className="font-[600] text-[12px] flex justify-center items-center h-[19px] w-[59px] bg-[#9CBDFF] rounded-[14px] text-white">
          Admin
        </div>
      )}
    </div>
  );
};

export default ImageWithTextCell;
