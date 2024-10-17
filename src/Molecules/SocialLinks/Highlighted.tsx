import React from "react";
import { returnPngIcons } from "../../assets/ReturnSocialIconsPng";
import Image from "../../Atoms/Image";
import Text from "../../Atoms/Text";
import { Link } from "../../Types";

const Highlighted: React.FC<Link> = (link) => {
  return (
    <div className="w-[100%] h-[80px] border border-[#CCCCCC] rounded-[17px]  flex items-center px-4 gap-3 ">
      <Image
        src={link?.linkImgUrl || returnPngIcons(link?.linkID)}
        classes="h-[45px] w-[45px] rounded-[9px]"
      />
      <div>
        <Text classes="font-[700] text-[10px]" text={link.title || link.name} />
        <Text
          classes="font-[400] text-[8px] mt-[2px]"
          text={link?.linkHighlightDescription}
        />
      </div>
    </div>
  );
};

export default Highlighted;
