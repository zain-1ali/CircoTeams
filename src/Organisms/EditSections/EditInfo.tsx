import Text from "../../Atoms/Text";
import ImageSelecter from "../../Molecules/ImageSelecter";
import InputWithLabel from "../../Molecules/InputWithLabel";
import upldPrfl from "../../assets/images/upldPrfl.png";
import upldLogo from "../../assets/images/upldLogo.png";
import upldCover from "../../assets/images/upldCover.png";
import InternationalPhone from "../../Molecules/InternationalPhone";
import Button from "../../Atoms/Button";

const EditInfo = () => {
  return (
    <div className="w-[94%] mt-6 overflow-y-scroll pb-4">
      <Text text="Basic Info" classes="font-[600] text-[15px]" />
      <InputWithLabel
        type="text"
        label="Profile Name"
        onChange={() => {}}
        value=""
        inputClasses="h-[40px] w-[238px] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
        labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
      />

      <div className="flex justify-start gap-[10%] mt-5">
        <ImageSelecter
          text="Profile Image"
          textClasses="font-[600] text-[12px] text-[#8D8D8D]"
          image={upldPrfl}
          imgClasses="h-[87px] w-[87px]  mt-2 rounded-full"
          containerClasse="flex flex-col items-center"
        />
        <ImageSelecter
          text="Cover Image"
          textClasses="font-[600] text-[12px] text-[#8D8D8D]"
          image={upldCover}
          imgClasses="h-[91px] rounded-[10px] w-[174px]  mt-2"
          containerClasse="flex flex-col items-center"
        />
        <ImageSelecter
          text="Logo"
          textClasses="font-[600] text-[12px] text-[#8D8D8D]"
          image={upldLogo}
          imgClasses="h-[87px] w-[87px]  mt-2 rounded-full"
          containerClasse="flex flex-col items-center"
        />
      </div>

      <Text text="Profile Info" classes="font-[600] text-[15px] mt-5" />

      <div className="flex justify-between">
        <div className="w-[48%]">
          <InputWithLabel
            type="text"
            label="First Name"
            onChange={() => {}}
            value=""
            inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
            labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
          />
        </div>
        <div className="w-[48%]">
          <InputWithLabel
            type="text"
            label="Last Name"
            onChange={() => {}}
            value=""
            inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
            labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
          />
        </div>
      </div>

      <div className="flex justify-between mt-2">
        <div className="w-[48%]">
          <InputWithLabel
            type="text"
            label="Job Title"
            onChange={() => {}}
            value=""
            inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
            labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
          />
        </div>
        <div className="w-[48%]">
          <InputWithLabel
            type="text"
            label="Company"
            onChange={() => {}}
            value=""
            inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
            labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
          />
        </div>
      </div>

      <div className="flex justify-between mt-2">
        <div className="w-[48%]">
          <InputWithLabel
            type="text"
            label="Location"
            onChange={() => {}}
            value=""
            inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
            labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
          />
        </div>
      </div>

      <Text text="Contact Info" classes="font-[600] text-[15px] mt-5" />

      <div className="flex justify-between">
        <div className="w-[48%]">
          <InputWithLabel
            type="text"
            label="Email"
            onChange={() => {}}
            value=""
            inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
            labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
          />
        </div>
        <div className="w-[48%]">
          <InternationalPhone
            labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
            flagBtnHeight="40px"
            flagBtnWidth="50px"
            inputClasses="w-[90%] h-[40px] outline-none pl-2 bg-[#F7F7F8] rounded-md"
          />
        </div>
      </div>

      <div className="w-[100%] flex justify-end mt-5 gap-4">
        <Button
          text="Cancel"
          btnClasses="text-[12px] font-[600] text-[#646464] w-[63px] h-[37px] rounded-[88px] bg-[#F0F0F0]"
          onClick={() => {}}
        />
        <Button
          text="Save"
          btnClasses="text-[12px] font-[600] text-white w-[138px] h-[37px] rounded-[88px] bg-[#2B6EF6]"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default EditInfo;
