import { useAppSelector } from "../Hooks/reduxHooks";
import UserAvatar from "./UserAvatar";
import { MdKeyboardArrowDown } from "react-icons/md";
import { appendBucketPath } from "../Services/Constants";
const SelectProfileDropdownButton = () => {
  const profileData = useAppSelector((state) => state.profileHandler);
  return (
    <div className="w-[290px] h-[70px] bg-white rounded-[13px] flex justify-between items-center pl-3 pr-2">
      <UserAvatar
        name={profileData?.firstName + " " + profileData?.lastName}
        picture={appendBucketPath(profileData?.profileUrl || "")}
        type="Social Profile"
      />
      <MdKeyboardArrowDown className="text-[22px] cursor-pointer" />
    </div>
  );
};

export default SelectProfileDropdownButton;
