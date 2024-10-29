import React from "react";
import { textBtnProps } from "../Types";
import Button from "../Atoms/Button";
import Text from "../Atoms/Text";

const TextButton: React.FC<textBtnProps> = ({
  text,
  btnText,
  width,
  onClick,
}) => {
  return (
    <div
      className={`h-[40px] ${width} bg-[#FAFAFB] rounded-[10px] flex justify-between items-center pl-2 pr-2`}
    >
      <Text text={text} classes="text-[#030229] text-[12px] font-[600]" />
      <Button
        text={btnText}
        btnClasses="w-[56px] h-[28px] rounded-[56px] bg-[#2B6EF6] text-white font-[700] text-[12px]"
        onClick={() => onClick()}
      />
    </div>
  );
};

export default TextButton;
