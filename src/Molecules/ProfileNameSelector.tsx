import Text from "../Atoms/Text";
import { IoIosArrowDown } from "react-icons/io";
import { useAppSelector } from "../Hooks/reduxHooks";

const ProfileNameSelector = () => {
  const profileName = useAppSelector(
    (state) => state.profileHandler.profileTitle
  ); 
  return (
    <div>
      <Text
        text="Profile Name"
        classes="font-[600] text-[12px] text-left text-[#8D8D8D] mt-2"
      />
      <div className="w-[238px] h-[40px] rounded-[10px] border border-[#DCDCDC] flex justify-between items-center pl-2 pr-2 mt-[2px]">
        <Text
          text={profileName}
          classes="font-[500] text-[12px] text-[#030229]"
        />
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default ProfileNameSelector;
