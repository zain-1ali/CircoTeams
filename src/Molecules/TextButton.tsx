import React from "react";
import { textBtnProps } from "../Types";
import Button from "../Atoms/Button";
import Text from "../Atoms/Text";
import Input from "../Atoms/Input";
import { useDispatch } from "react-redux";
import { setUsername } from "../Redux/ProfileSlice";
import { useAppSelector } from "../Hooks/reduxHooks";

const TextButton: React.FC<textBtnProps> = ({
  text,
  btnText,
  width,
  onClick,
}) => {
  const dispatch = useDispatch();
  const profileData = useAppSelector((state) => state.profileHandler);



  return (
    <div
      className={`h-[40px] ${width} bg-[#FAFAFB] rounded-[10px] flex justify-between items-center ${
        text ? "pl-2" : "pl-0"
      } pr-2`}
    >
      <div className="flex items-center gap-1">
        <Text text={text} classes="text-[#030229] text-[12px] font-[600]" />
        <Input
          onChange={(e) => dispatch(setUsername(e.target.value))}
          value={profileData?.username}
          classes="bg-transparent outline-none w-[70%] text-[#030229] text-[12px] font-[600]"
        />
      </div>

      <Button
        text={btnText}
        btnClasses="w-[56px] h-[28px] rounded-[56px] bg-[#2B6EF6] text-white font-[700] text-[12px]"
        onClick={() => onClick()}
      />
    </div>
  );
};

export default TextButton;
