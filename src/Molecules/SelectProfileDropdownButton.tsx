import UserAvatar from "./UserAvatar";
import { MdKeyboardArrowDown } from "react-icons/md";

const SelectProfileDropdownButton = () => {
  return (
    <div className="w-[290px] h-[70px] bg-white rounded-[13px] flex justify-between items-center pl-3 pr-2">
      <UserAvatar />
      <MdKeyboardArrowDown className="text-[22px] cursor-pointer" />
    </div>
  );
};

export default SelectProfileDropdownButton;
