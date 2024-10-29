import React from "react";
import Button from "../Atoms/Button";
import { buttonProps } from "../Types";

const CustomButton: React.FC<buttonProps> = ({
  btnClasses = "bg-[#2B6EF6] text-[white] w-[100%] h-[50px] text-[600] text-[16px] rounded-md mt-4",
  text,
  onClick,
  icon,
}) => {
  // console.log(onClick);
  return (
    <>
      <Button
        onClick={() => onClick()}
        btnClasses={btnClasses}
        text={text || ""}
        icon={icon}
      />
    </>
  );
};

export default CustomButton;
