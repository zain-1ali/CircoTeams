// import React from "react";
import Image from "../Atoms/Image";
import Text from "../Atoms/Text";
import { imageWithTextProps } from "../Types";
import profilePlchldr from "../assets/images/profilePlchldr.png";

const ImageWithTextCell: React.FC<imageWithTextProps> = ({
  containerClass,
  data,
}) => {
  return (
    <div className={containerClass}>
      <Image
        src={data?.image || profilePlchldr}
        classes="h-[36px] w-[36px] rounded-full object-cover"
      />
      <Text text={data.text} classes="font-[600] text-[14px]" />
      {data?.isAdmin && (
        <div className="font-[600] text-[12px] flex justify-center items-center h-[19px] w-[59px] bg-[#9CBDFF] rounded-[14px] text-white">
          Admin
        </div>
      )}
    </div>
  );
};

export default ImageWithTextCell;
