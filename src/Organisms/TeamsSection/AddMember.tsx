import Button from "../../Atoms/Button";
import Text from "../../Atoms/Text";

const AddMember = () => {
  return (
    <div className="h-[100%] w-[100%] overflow-y-scroll pb-3">
      <Text
        text="Add Members Via Emails"
        classes="font-[600] text-[18px] text-[#464646] mt-3"
      />
      <Text
        text="Add members to your team via emails. Their accounts will be automatically generated, and they can change password after logging in. If a member's email is already registered with Circo, a new team profile will be generated."
        classes="font-[500] text-[14px] text-[#A4A4A4] w-[72%]"
      />
      <div className="h-[112px] w-[72%] bg-[#F6F6F6] rounded-[18px] mt-6 pt-3 pl-3 pr-3 flex justify-start gap-x-4 flex-wrap">
        <div className="h-[32px] pt-[7.5px] pb-[10px] pr-[10px] pl-[10px] border border-[#E8E8E8] bg-white rounded-[50px] ">
          <Text
            text="kevin.jin@company.com"
            classes="font-[400] text-[10px] text-[#565656]"
          />
        </div>
        <div className="h-[32px] pt-[7.5px] pb-[10px] pr-[10px] pl-[10px] border border-[#E8E8E8] bg-white rounded-[50px] ">
          <Text
            text="michael.cohen@company.com"
            classes="font-[400] text-[10px] text-[#565656]"
          />
        </div>

        <div className="h-[32px] pt-[7.5px] pb-[10px] pr-[10px] pl-[10px] border border-[#E8E8E8] bg-white rounded-[50px] ">
          <Text
            text="jenna.root@company.com"
            classes="font-[400] text-[10px] text-[#565656]"
          />
        </div>
      </div>

      <div className="w-[72%] flex justify-end mt-3">
        <Button
          btnClasses="w-[163px] h-[43px] bg-[#2B6EF6] rounded-[50px] font-[700] text-[16px] text-white"
          text="Add Members"
          onClick={() => {}}
        />
      </div>

      <div className="flex justify-between w-[72%] items-center mt-5">
        <div className="w-[45%] h-[1px] bg-[#BEBEBE]"></div>
        <Text classes="font-[600] text-[16px] text-[#BEBEBE]" text="or" />
        <div className="w-[45%] h-[1px] bg-[#BEBEBE]"></div>
      </div>

      <Text
        text="Add Members Via CSV"
        classes="font-[600] text-[18px] text-[#464646] mt-3"
      />
      <Text
        text="CSV file needs to have columns with: Email (required), Name (required), Profile Image link."
        classes="font-[500] text-[14px] text-[#A4A4A4] w-[72%] mt-[2px]"
      />

      <Text
        text="Download CSV template"
        classes="font-[500] text-[12px] text-[#2B6EF6] underline cursor-pointer mt-[2px]"
      />

      <div className="h-[158px] w-[72%]  rounded-[18px] border border-[#E4E4E4] border-dashed  flex flex-col justify-center items-center mt-5">
        <span className="flex gap-[6px]">
          <Text
            classes="font-[500] text-[17px] text-[#2B6EF6]"
            text="Select CSV or Excel  file"
          />
          <Text classes="font-[500] text-[17px]" text=" to upload" />
        </span>
        <Text
          classes="font-[500] text-[17px] text-[#9B9B9B] mt-1"
          text="Must be .csv, .xls, or .xlsx file"
        />
      </div>
      <div className="w-[72%] flex justify-end mt-3">
        <Button
          btnClasses="w-[163px] h-[43px] bg-[#2B6EF6] rounded-[50px] font-[700] text-[16px] text-white"
          text="Add Members"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default AddMember;
