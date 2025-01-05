import Text from "../Atoms/Text";
import { IoIosArrowDown } from "react-icons/io";
import { useAppSelector } from "../Hooks/reduxHooks";

const FontSelector = () => {
  const profileDesign = useAppSelector(
    (state) => state.profileHandler.profileDesign
  );

  const returnCrntFont = (font: string) => {
    if (font === "1") {
      return "Inika";
    } else if (font === "2") {
      return "Gugi";
    } else if (font === "3") {
      return "Gothic";
    } else if (font === "4") {
      return "Marck Script";
    } else if (font === "5") {
      return "Chivo";
    } else if (font === "6") {
      return "SF Pro";
    }
  };
  return (
    <div>
      <Text
        text="Profile Font"
        classes="font-[600] text-[12px] text-[#8D8D8D]"
      />
      <div className="w-[238px] h-[40px] rounded-[10px] border border-[#DCDCDC] flex justify-between items-center pl-2 pr-2 mt-[2px]">
        <Text
          text={returnCrntFont(profileDesign?.profileFont)}
          classes="font-[500] text-[12px] text-[#030229]"
        />
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default FontSelector;
