import { LuRepeat } from "react-icons/lu";
import Button from "../Atoms/Button";

const ProfileButtonsArea = () => {
  return (
    <div className="w-[100%] flex justify-center mt-2 items-center relative">
      <Button
        onClick={() => {}}
        btnClasses="h-[29px] w-[95px] bg-[black] border-none outline-none font-[700] text-[9px] text-[#FFFFFF] rounded-[6px]"
        text="Save Contact"
      />

      <Button
        onClick={() => {}}
        btnClasses="h-[20px] w-[20px] bg-[black] border-none outline-none font-[700]  text-[#FFFFFF] rounded-[5px] flex justify-center items-center absolute right-11"
        icon={
          <LuRepeat
            className=" text-white h-[12px] w-[12px]"

            //   style={{ color: saveContactTextColor }}
          />
        }
      />
    </div>
  );
};

export default ProfileButtonsArea;
