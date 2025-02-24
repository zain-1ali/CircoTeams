import React from "react";
import Image from "../Atoms/Image";
import Text from "../Atoms/Text";
import { iconWithTextProps } from "../Types";

const IconWithTextCell: React.FC<iconWithTextProps> = ({
  icon,
  text,
  iconClass,
  width
}) => {
  return (
    <div className={`flex items-center ${width || "w-[200px]"} gap-2`}>
      <Image src={icon} classes={iconClass} />
      <Text text={text} classes="font-[600] text-[12px] text-[#939393]" />
    </div>
  );
};

export default IconWithTextCell;
