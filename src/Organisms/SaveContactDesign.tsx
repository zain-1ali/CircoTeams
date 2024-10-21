import Text from "../Atoms/Text";
import { useAppDispatch, useAppSelector } from "../Hooks/reduxHooks";
import ColorSelector from "../Molecules/ColorSelector";
import {
  setSaveBtnBgColor,
  setSaveBtnStyle,
  setSaveBtnText,
} from "../Redux/ProfileSlice";
import btnBg from "../assets/images/btnBg.png";
import { FaCircleCheck } from "react-icons/fa6";

const SaveContactDesign = () => {
  const profileDesign = useAppSelector(
    (state) => state.profileHandler.profileDesign
  );
  const dispatch = useAppDispatch();
  const handleChangeSaveBgColor = (color: string) => {
    dispatch(setSaveBtnBgColor(color));
  };

  const handleChangeSaveTextColor = (color: string) => {
    dispatch(setSaveBtnText(color));
  };

  const handleChangeSaveStyle = (style: string) => {
    dispatch(setSaveBtnStyle(style));
  };
  return (
    <div className="w-[100%]   h-[320px] rounded-[20px] bg-[#F9F9F9] pl-4 pr-4 pt-6 mt-1 ">
      <Text
        text="Button Style"
        classes="font-[600] text-[12px] text-[#8D8D8D]"
      />
      <div className="flex gap-5 mt-2">
        <div
          className="h-[37px] w-[110px] flex justify-center items-center bg-black text-white rounded-[7px] text-[12px] font-[700] relative"
          onClick={() => handleChangeSaveStyle("style1")}
        >
          {profileDesign?.saveContactStyle === "style1" && (
            <FaCircleCheck className="text-primary absolute top-[-7px] right-[-7px] text-xl" />
          )}
          Save Contact
        </div>
        <div
          className="h-[37px] w-[110px] flex justify-center items-center border border-black  text-black rounded-[7px] text-[12px] font-[700] relative"
          onClick={() => handleChangeSaveStyle("style2")}
        >
          {profileDesign?.saveContactStyle === "style2" && (
            <FaCircleCheck className="text-primary absolute top-[-7px] right-[-7px] text-xl" />
          )}
          Save Contact
        </div>
        <div
          className="h-[37px] w-[110px] flex justify-center items-center  text-white rounded-[7px] text-[12px] font-[700] relative"
          style={{
            background: `url(${btnBg})`,
          }}
          onClick={() => handleChangeSaveStyle("style3")}
        >
          {profileDesign?.saveContactStyle === "style3" && (
            <FaCircleCheck className="text-primary absolute top-[-7px] right-[-7px] text-xl" />
          )}
          Save Contact
        </div>
      </div>

      <div className="flex gap-5 mt-4">
        <div
          className="h-[37px] w-[110px] flex justify-center items-center bg-black text-white rounded-full cursor-pointer text-[12px] font-[700] relative"
          onClick={() => handleChangeSaveStyle("style4")}
        >
          {profileDesign?.saveContactStyle === "style4" && (
            <FaCircleCheck className="text-primary absolute top-[-7px] right-[-7px] text-xl" />
          )}
          Save Contact
        </div>
        <div
          className="h-[37px] w-[110px] flex justify-center items-center border border-black  text-black rounded-full cursor-pointer text-[12px] font-[700] relative"
          onClick={() => handleChangeSaveStyle("style5")}
        >
          {profileDesign?.saveContactStyle === "style5" && (
            <FaCircleCheck className="text-primary absolute top-[-7px] right-[-7px] text-xl" />
          )}
          Save Contact
        </div>
        <div
          className="h-[37px] w-[110px] flex justify-center items-center  text-white rounded-full cursor-pointer text-[12px] font-[700] relative"
          style={{
            background: `url(${btnBg})`,
          }}
          onClick={() => handleChangeSaveStyle("style6")}
        >
          {profileDesign?.saveContactStyle === "style6" && (
            <FaCircleCheck className="text-primary absolute top-[-7px] right-[-7px] text-xl" />
          )}
          Save Contact
        </div>
      </div>

      <div className="mt-6">
        <ColorSelector
          colorType="Button Color"
          color={profileDesign.saveContactBackgroundColor}
          handleChangeColor={handleChangeSaveBgColor}
        />
      </div>
      <div className="mt-3">
        <ColorSelector
          colorType="Text Color"
          color={profileDesign?.saveContactTextColor}
          handleChangeColor={handleChangeSaveTextColor}
        />
      </div>
    </div>
  );
};

export default SaveContactDesign;
