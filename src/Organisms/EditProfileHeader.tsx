import SelectProfileDropdownButton from "../Molecules/SelectProfileDropdownButton";
import SquareIconBtn from "../Molecules/SquareIconBtn";

const EditProfileHeader = () => {
  return (
    <div className="w-[100%]  flex justify-between mt-3">
      <SelectProfileDropdownButton />
      <div className="flex gap-4 items-center">
        <SquareIconBtn
          btnClass="h-[50px] w-[50px] rounded-[12px] bg-[#F4F4F4] flex justify-center items-center cursor-pointer bg-white"
          imgClass="h-[20px] w-[20px] object-cover"
          action={() => {}}
          btnType={4}
        />
        <SquareIconBtn
          btnClass="h-[50px] w-[50px] rounded-[12px] bg-[#F4F4F4] flex justify-center items-center cursor-pointer bg-white"
          imgClass="h-[20px] w-[20px] object-cover"
          action={() => {}}
          btnType={5}
        />
        <SquareIconBtn
          btnClass="h-[50px] w-[50px] rounded-[12px] bg-[#F4F4F4] flex justify-center items-center cursor-pointer bg-white"
          imgClass="h-[20px] w-[20px] object-cover"
          action={() => {}}
          btnType={6}
        />
      </div>
    </div>
  );
};

export default EditProfileHeader;
