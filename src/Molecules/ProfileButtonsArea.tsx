import { LuRepeat } from "react-icons/lu";
// import Button from "../Atoms/Button";
import {
  // useAppDispatch,
  useAppSelector,
} from "../Hooks/reduxHooks";
import { hexToRGBA } from "../utils/hexToRGBA";
// import { toggleLeadMode } from "../Redux/ProfileSlice";

const ProfileButtonsArea = () => {
  const profileData = useAppSelector(
    (state) => state.profileHandler.profileDesign
  );

  const saveBtnStyle = profileData?.saveContactStyle;
  const saveContactBackgroundColor = profileData.saveContactBackgroundColor;
  const saveContactTextColor = profileData.saveContactTextColor;

  console.log(saveBtnStyle);

  // const dispatch = useAppDispatch();

  return (
    <div className="w-[100%] flex justify-center mt-2 items-center relative">
      {/* <Button
        onClick={() => {}}
        btnClasses="h-[29px] w-[95px] bg-[black] border-none outline-none font-[700] text-[9px] text-[#FFFFFF] rounded-[6px]"
        text=""
      /> */}
      <div
        className="h-[29px] w-[95px] bg-[black] border-none outline-none font-[700] text-[9px] text-[#FFFFFF] rounded-[6px] flex justify-center items-center"
        // style={{
        //   backgroundColor:
        //     profileData?.saveContactStyle != "style2" &&
        //     profileData?.saveContactStyle != "style5"
        //       ? profileData?.saveContactBackgroundColor
        //       : "transparent",
        //   border: `1px solid ${profileData?.saveContactBackgroundColor}`,
        //   color: profileData?.saveContactTextColor,
        //   borderRadius:
        //     profileData?.saveContactStyle === "style4" ||
        //     profileData?.saveContactStyle === "style5" ||
        //     profileData?.saveContactStyle === "style6"
        //       ? "100px"
        //       : "6px",
        // }}

        style={
          saveBtnStyle === "style6" || saveBtnStyle === "style5"
            ? {
                background: `linear-gradient(135deg, ${hexToRGBA(
                  saveContactBackgroundColor,
                  "1"
                )} 0%,  ${hexToRGBA(saveContactBackgroundColor, "2")} 0%)`,

                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                borderRadius: saveBtnStyle === "style5" ? "6px" : "100px",
                color: saveContactTextColor,
              }
            : {
                backgroundColor:
                  saveBtnStyle === "style1" || saveBtnStyle === "style2"
                    ? saveContactBackgroundColor
                    : "transparent",
                fontStyle: "Inter",
                border:
                  saveBtnStyle === "style3" || saveBtnStyle === "style4"
                    ? `1px solid ${saveContactBackgroundColor}`
                    : undefined,
                borderRadius:
                  saveBtnStyle === "style1" ||
                  saveBtnStyle === "style3" ||
                  saveBtnStyle === "style5"
                    ? "6px"
                    : "100px",
                color: saveContactTextColor,
              }
        }
      >
        Save Contact
      </div>
      <div
        className="h-[20px] w-[20px] bg-[black] border-none outline-none font-[700]  text-[#FFFFFF] rounded-[5px] flex justify-center items-center absolute right-11"
        style={
          saveBtnStyle === "style6" || saveBtnStyle === "style5"
            ? {
                background: `linear-gradient(135deg, ${hexToRGBA(
                  saveContactBackgroundColor,
                  "1"
                )} 0%,  ${hexToRGBA(saveContactBackgroundColor, "2")} 0%)`,
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                borderRadius: saveBtnStyle === "style5" ? "6px" : "100px",
                color: saveContactTextColor,
              }
            : {
                backgroundColor:
                  saveBtnStyle === "style1" || saveBtnStyle === "style2"
                    ? saveContactBackgroundColor
                    : "transparent",
                fontStyle: "Inter",
                border:
                  saveBtnStyle === "style3" || saveBtnStyle === "style4"
                    ? `1px solid ${saveContactBackgroundColor}`
                    : undefined, // Use undefined instead of null
                borderRadius:
                  saveBtnStyle === "style1" ||
                  saveBtnStyle === "style3" ||
                  saveBtnStyle === "style5"
                    ? "6px"
                    : "100px",
                color: saveContactTextColor,
              }
        }
        onClick={
          () => {} // dispatch(toggleLeadMode())
        }
      >
        <LuRepeat
          className="text-white h-[12px] w-[12px]"
          style={{ color: saveContactTextColor }}
        />
      </div>
      {/* <Button
        text=""
        onClick={() => {}}
        btnClasses="h-[20px] w-[20px] bg-[black] border-none outline-none font-[700]  text-[#FFFFFF] rounded-[5px] flex justify-center items-center absolute right-11"
        icon={
          <LuRepeat
            className=" text-white h-[12px] w-[12px]"
          />
        }
      /> */}
    </div>
  );
};

export default ProfileButtonsArea;
