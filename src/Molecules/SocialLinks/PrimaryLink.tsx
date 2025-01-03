import React from "react";
import { returnPngIcons } from "../../assets/ReturnSocialIconsPng";
import Image from "../../Atoms/Image";
import Text from "../../Atoms/Text";
import { Link } from "../../Types";
import { useAppSelector } from "../../Hooks/reduxHooks";

const PrimaryLink: React.FC<Link> = (link) => {
  console.log(link.name);
  const profileData = useAppSelector((state) => state.profileHandler);
  return (
    <div
      className="w-[65px] h-[60px]  flex flex-col items-center transition-opacity duration-500 ease-in-out"
      style={{ display: link?.shareable === false ? "none" : undefined }}
    >
      <Image
        src={link?.linkImgUrl || returnPngIcons(link?.linkID)}
        classes="h-[45px] w-[45px] rounded-[9px]"
      />
      <Text
        classes={`font-[400] text-[9px] mt-[2px] ${
          profileData.profileDesign.whiteTextAndBorder
            ? "text-white"
            : "text-black"
        }`}
        text={link.title || link.name}
      />
    </div>
  );
};

export default PrimaryLink;
