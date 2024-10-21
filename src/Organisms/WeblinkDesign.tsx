import { FaCircleCheck } from "react-icons/fa6";
import Text from "../Atoms/Text";
import { useAppDispatch, useAppSelector } from "../Hooks/reduxHooks";
import ColorSelector from "../Molecules/ColorSelector";
import {
  setWeblinkButtonBackgroundColor,
  setWeblinkButtonTextColor,
  setWeblinkStyle,
} from "../Redux/ProfileSlice";
import btnBg from "../assets/images/btnBg.png";

const WebLinkDesign = () => {
  const profileDesign = useAppSelector(
    (state) => state.profileHandler.profileDesign
  );
  const dispatch = useAppDispatch();
  const handleChangeWebBgColor = (color: string) => {
    dispatch(setWeblinkButtonBackgroundColor(color));
  };

  const handleChangeWebTextColor = (color: string) => {
    dispatch(setWeblinkButtonTextColor(color));
  };

  const handleChangeWebStyle = (style: string) => {
    dispatch(setWeblinkStyle(style));
  };
  return (
    <div className="w-[100%]   h-[370px] rounded-[20px] bg-[#F9F9F9] pl-4 pr-4 pt-6 mt-1 ">
      <Text
        text="Button Style"
        classes="font-[600] text-[12px] text-[#8D8D8D]"
      />
      <div className="flex gap-5 mt-2">
        <div
          className="h-[37px] w-[110px] flex justify-center items-center bg-black text-white  text-[12px] font-[700] relative"
          onClick={() => handleChangeWebStyle("style1")}
        >
          {profileDesign?.weblinkStyle === "style1" && (
            <FaCircleCheck className="text-primary absolute top-[-7px] right-[-7px] text-xl" />
          )}
        </div>
        <div
          className="h-[37px] w-[110px] flex justify-center items-center bg-black text-white rounded-[7px] text-[12px] font-[700] relative"
          onClick={() => handleChangeWebStyle("style2")}
        >
          {profileDesign?.weblinkStyle === "style2" && (
            <FaCircleCheck className="text-primary absolute top-[-7px] right-[-7px] text-xl" />
          )}
        </div>
        <div
          className="h-[37px] w-[110px] flex justify-center items-center bg-black text-white rounded-[12px] text-[12px] font-[700] relative"
          onClick={() => handleChangeWebStyle("style3")}
        >
          {profileDesign?.weblinkStyle === "style3" && (
            <FaCircleCheck className="text-primary absolute top-[-7px] right-[-7px] text-xl" />
          )}
        </div>
        <div
          className="h-[37px] w-[110px] flex justify-center items-center bg-black text-white rounded-full cursor-pointer text-[12px] font-[700] relative"
          onClick={() => handleChangeWebStyle("style4")}
        >
          {profileDesign?.weblinkStyle === "style4" && (
            <FaCircleCheck className="text-primary absolute top-[-7px] right-[-7px] text-xl" />
          )}
        </div>
      </div>

      <div className="flex gap-5 mt-4">
        <div
          className="h-[37px] w-[110px] flex justify-center items-center border border-black  text-black  text-[12px] font-[700] relative"
          onClick={() => handleChangeWebStyle("style5")}
        >
          {profileDesign?.weblinkStyle === "style5" && (
            <FaCircleCheck className="text-primary absolute top-[-7px] right-[-7px] text-xl" />
          )}
        </div>
        <div
          className="h-[37px] w-[110px] flex justify-center items-center border border-black  text-black rounded-[7px] text-[12px] font-[700] relative"
          onClick={() => handleChangeWebStyle("style6")}
        >
          {profileDesign?.weblinkStyle === "style6" && (
            <FaCircleCheck className="text-primary absolute top-[-7px] right-[-7px] text-xl" />
          )}
        </div>
        <div
          className="h-[37px] w-[110px] flex justify-center items-center border border-black  text-black rounded-[12px] text-[12px] font-[700] relative"
          onClick={() => handleChangeWebStyle("style7")}
        >
          {profileDesign?.weblinkStyle === "style7" && (
            <FaCircleCheck className="text-primary absolute top-[-7px] right-[-7px] text-xl" />
          )}
        </div>
        <div
          className="h-[37px] w-[110px] flex justify-center items-center border border-black  text-black rounded-full cursor-pointer text-[12px] font-[700] relative"
          onClick={() => handleChangeWebStyle("style8")}
        >
          {profileDesign?.weblinkStyle === "style8" && (
            <FaCircleCheck className="text-primary absolute top-[-7px] right-[-7px] text-xl" />
          )}
        </div>
      </div>

      <div className="flex gap-5 mt-4">
        <div
          className="h-[37px] w-[110px] flex justify-center items-center  text-white  text-[12px] font-[700] relative"
          style={{
            background: `url(${btnBg})`,
          }}
          onClick={() => handleChangeWebStyle("style9")}
        >
          {profileDesign?.weblinkStyle === "style9" && (
            <FaCircleCheck className="text-primary absolute top-[-7px] right-[-7px] text-xl" />
          )}
        </div>
        <div
          className="h-[37px] w-[110px] flex justify-center items-center  text-white rounded-[7px] text-[12px] font-[700] relative"
          style={{
            background: `url(${btnBg})`,
          }}
          onClick={() => handleChangeWebStyle("style10")}
        >
          {profileDesign?.weblinkStyle === "style10" && (
            <FaCircleCheck className="text-primary absolute top-[-7px] right-[-7px] text-xl" />
          )}
        </div>
        <div
          className="h-[37px] w-[110px] flex justify-center items-center  text-white rounded-[12px] text-[12px] font-[700] relative"
          style={{
            background: `url(${btnBg})`,
          }}
          onClick={() => handleChangeWebStyle("style11")}
        >
          {profileDesign?.weblinkStyle === "style11" && (
            <FaCircleCheck className="text-primary absolute top-[-7px] right-[-7px] text-xl" />
          )}
        </div>

        <div
          className="h-[37px] w-[110px] flex justify-center items-center  text-white rounded-full cursor-pointer text-[12px] font-[700] relative"
          style={{
            background: `url(${btnBg})`,
          }}
          onClick={() => handleChangeWebStyle("style12")}
        >
          {profileDesign?.weblinkStyle === "style12" && (
            <FaCircleCheck className="text-primary absolute top-[-7px] right-[-7px] text-xl" />
          )}
        </div>
      </div>

      <div className="mt-6">
        <ColorSelector
          colorType="Button Color"
          color={profileDesign.weblinkButtonBackgroundColor}
          handleChangeColor={handleChangeWebBgColor}
        />
      </div>
      <div className="mt-3">
        <ColorSelector
          colorType="Text Color"
          color={profileDesign.weblinkButtonTextColor}
          handleChangeColor={handleChangeWebTextColor}
        />
      </div>
    </div>
  );
};

export default WebLinkDesign;
