import React from "react";
import { toggleAreaProps } from "../Types";
import Text from "../Atoms/Text";
import IOSSwitch from "../Atoms/CustomToggleBtn";

const ToggleArea: React.FC<toggleAreaProps> = ({
  text,
  width,
  toggleChange,
  toggleValue,
}) => {
  return (
    <div
      className={`h-[41px] ${width} border rounded-full border-[#DADADA] flex justify-between items-center pl-3 pr-3`}
    >
      <Text text={text} classes="font-[600] text-[13px] text-[#818194]" />
      <IOSSwitch onChange={toggleChange} value={toggleValue} />
    </div>
  );
};

export default ToggleArea;
