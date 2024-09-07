import React, { useState } from "react";
import { sidebarBtnProps } from "../Types";
import Image from "../Atoms/Image";
import Text from "../Atoms/Text";

const SidebarButton: React.FC<sidebarBtnProps> = ({
  icon,
  hoverIcon,
  text,
  height,
}) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div>
      {" "}
      <div
        className={`${hover && "bg-[#eeeeff]"} ${
          height || "h-[48px]"
        } rounded-md w-[100%] flex items-center cursor-pointer`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Image
          src={hover ? hoverIcon : icon}
          classes="max-h-[24px] max-w-[24px] ml-4 object-cover"
        />
        <Text
          text={text}
          classes={`${
            hover ? "text-[#2B6EF6]" : "text-[#9a9aa9]"
          } font-[600] text-[16px] ml-3`}
        />
      </div>
    </div>
  );
};

export default SidebarButton;
