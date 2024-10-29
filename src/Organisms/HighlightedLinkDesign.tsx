import { FaCircleCheck } from "react-icons/fa6";
import Text from "../Atoms/Text";
import { useAppDispatch, useAppSelector } from "../Hooks/reduxHooks";
import ColorSelector from "../Molecules/ColorSelector";
import {
  setBoxBackgroundColor,
  setBoxStyle,
  setBoxTextColor,
} from "../Redux/ProfileSlice";
import btnBg from "../assets/images/btnBg.png";

const HighlightedLinkDesign = () => {
  const profileDesign = useAppSelector(
    (state) => state.profileHandler.profileDesign
  );
  const dispatch = useAppDispatch();

  const handleChangeBoxBgColor = (color: string) => {
    dispatch(setBoxBackgroundColor(color));
  };

  const handleChangeBoxTextColor = (color: string) => {
    dispatch(setBoxTextColor(color));
  };

  const handleChangeBoxStyle = (style: string) => {
    dispatch(setBoxStyle(style));
  };
  return (
    <div className="w-[100%]   h-[300px] rounded-[20px] bg-[#F9F9F9] pl-4 pr-4 pt-6 mt-1 ">
      <Text
        text="Button Style"
        classes="font-[600] text-[12px] text-[#8D8D8D]"
      />
      <div className="flex gap-5 mt-2">
        <div
          className="w-[173px] h-[65px] rounded-xl border flex pl-3 gap-2 items-center cursor-pointer relative"
          onClick={() => handleChangeBoxStyle("style1")}
        >
          {profileDesign?.highlightBoxStyle === "style1" && (
            <FaCircleCheck className="text-primary absolute top-[-7px] right-[-7px] text-xl" />
          )}
          <div className="h-[37px] w-[37px] bg-[#6CEDF5] rounded-[5px]"></div>
          <div className="">
            <Text text="App Name" classes="font-[700] text-xs" />
            <Text text="App Description" classes="text-[7px] mt-[2px]" />
          </div>
        </div>
        <div
          className="w-[173px] h-[65px] rounded-xl border flex pl-3 gap-2 items-center bg-[black] cursor-pointer relative"
          onClick={() => handleChangeBoxStyle("style2")}
        >
          {profileDesign?.highlightBoxStyle === "style2" && (
            <FaCircleCheck className="text-primary absolute top-[-7px] right-[-7px] text-xl" />
          )}
          <div className="h-[37px] w-[37px] bg-[#6CEDF5] rounded-[5px]"></div>
          <div className="">
            <Text text="App Name" classes="font-[700] text-xs text-white" />
            <Text
              text="App Description"
              classes="text-[7px] mt-[2px] text-white"
            />
          </div>
        </div>
        <div
          className="w-[173px] h-[65px] rounded-xl border flex pl-3 gap-2 items-center  cursor-pointer relative"
          style={{
            background: `url(${btnBg})`,
          }}
          onClick={() => handleChangeBoxStyle("style3")}
        >
          {profileDesign?.highlightBoxStyle === "style3" && (
            <FaCircleCheck className="text-primary absolute top-[-7px] right-[-7px] text-xl" />
          )}
          <div className="h-[37px] w-[37px] bg-[#6CEDF5] rounded-[5px]"></div>
          <div className="">
            <Text text="App Name" classes="font-[700] text-xs text-white" />
            <Text
              text="App Description"
              classes="text-[7px] mt-[2px] text-white"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <ColorSelector
          colorType="Button Color"
          color={profileDesign.boxBackgroundColor}
          handleChangeColor={handleChangeBoxBgColor}
        />
      </div>
      <div className="mt-3">
        <ColorSelector
          colorType="Text Color"
          color={profileDesign.boxTextColor}
          handleChangeColor={handleChangeBoxTextColor}
        />
      </div>
    </div>
  );
};

export default HighlightedLinkDesign;
