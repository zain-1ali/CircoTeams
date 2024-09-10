import Text from "../Atoms/Text";
import { IoIosArrowDown } from "react-icons/io";

const FontSelector = () => {
  return (
    <div>
      <Text
        text="Profile Font"
        classes="font-[600] text-[12px] text-[#8D8D8D]"
      />
      <div className="w-[238px] h-[40px] rounded-[10px] border border-[#DCDCDC] flex justify-between items-center pl-2 pr-2 mt-[2px]">
        <Text text="Default" classes="font-[500] text-[12px] text-[#030229]" />
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default FontSelector;
