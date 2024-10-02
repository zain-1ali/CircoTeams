import React from "react";
import { returnPngIcons } from "../../assets/ReturnSocialIconsPng";
import Image from "../../Atoms/Image";
import Text from "../../Atoms/Text";
import { Link } from "../../Types";

const PrimaryLink: React.FC<Link> = (link) => {
  return (
    <div className="w-[65px] h-[60px]  flex flex-col items-center">
      <Image src={returnPngIcons(link?.linkID)} classes="h-[45px] w-[45px]" />
      <Text classes="font-[400] text-[9px] mt-[2px]" text={link.name} />
    </div>
  );
};

export default PrimaryLink;
