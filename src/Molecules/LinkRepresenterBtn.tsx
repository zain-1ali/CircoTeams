import React from "react";
import Image from "../Atoms/Image";
import Text from "../Atoms/Text";
import { returnPngIcons } from "../assets/ReturnSocialIconsPng";
import Button from "../Atoms/Button";
import { IoMdAdd } from "react-icons/io";

const LinkRepresenterBtn: React.FC<any> = ({ link }) => {
  return (
    <div className="w-[237px] h-[55px] bg-[#F5F5F5] rounded-[15px] flex justify-between items-center px-3 ">
      <div className="flex items-center gap-3">
        <Image
          src={returnPngIcons(link?.linkID)}
          classes="h-[32px] w-[32px] object-cover"
        />
        <Text
          text={link?.name}
          classes="font-[600] text-[14px] text-[#7C7C7C]"
        />
      </div>
      <Button
        text=""
        btnClasses="w-[48px] h-[32px] bg-[#ffffff] rounded-[100px] flex justify-center items-center"
        onClick={() => {}}
        icon={<IoMdAdd className="text-[#858585]" />}
      />
    </div>
  );
};

export default LinkRepresenterBtn;
