import Button from "../Atoms/Button";
import Image from "../Atoms/Image";
import Input from "../Atoms/Input";
import Text from "../Atoms/Text";
import { pageHeadProps } from "../Types";
import i14 from "../assets/images/i14.png";
import { CiSearch } from "react-icons/ci";

const TableHeader: React.FC<pageHeadProps> = ({ headerName, number }) => {
  return (
    <div className="w-[100%]">
      <div className="w-[100%] flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Text text={headerName} classes="font-[600] text-[18px]" />{" "}
          {number && (
            <Text
              text={`(${number})`}
              classes="font-[600] text-[12px] text-[#B5B5B5] mt-1"
            />
          )}
        </div>
        {headerName === "Members" && (
          <div className="flex items-center gap-4">
            <Button
              btnClasses="h-[32px] rounded-[22px] w-[139px] text-[12px] font-[600] text-white bg-[#2B6EF6]"
              text="Add Member"
              onClick={() => {}}
            />
            <Button
              btnClasses="h-[32px] rounded-[22px] w-[139px] text-[12px] font-[600] bg-[#F9F9F9] text-[#808080]"
              text="Assign Template"
              onClick={() => {}}
            />
            <Button
              btnClasses="h-[32px] rounded-[22px] w-[139px] text-[12px] font-[600] bg-[#F9F9F9] text-[#808080]"
              text="Assign to Subteam"
              onClick={() => {}}
            />
            <Image
              src={i14}
              classes="w-[15.62px] h-[18.38px] object-cover cursor-pointer"
            />
          </div>
        )}

        {headerName === "Template" && (
          <Button
            btnClasses="h-[32px] rounded-[22px] w-[143px] text-[12px] font-[600] text-white bg-[#2B6EF6]"
            text="Create New Template"
            onClick={() => {}}
          />
        )}

        {headerName === "Subteams" && (
          <div className="flex items-center gap-4">
            <Button
              btnClasses="h-[32px] rounded-[22px] w-[143px] text-[12px] font-[600] text-white bg-[#2B6EF6]"
              text="Create New Subteam"
              onClick={() => {}}
            />
            <Button
              btnClasses="h-[32px] rounded-[22px] w-[139px] text-[12px] font-[600] bg-[#F9F9F9] text-[#808080]"
              text="Assign Template"
              onClick={() => {}}
            />
            <Button
              btnClasses="h-[32px] rounded-[22px] w-[139px] text-[12px] font-[600] bg-[#F9F9F9]  text-red-500"
              text="Remove Subteam"
              onClick={() => {}}
            />
          </div>
        )}
      </div>

      <div className="w-[100%] flex h-[39px] rounded-[100px] border-[#CACACA] border mt-4 items-center pl-2 gap-2 bg-white">
        <CiSearch className="text-[#B7B7B7] text-[24px]" />
        <Input
          classes="h-[95%] w-[80%] outline-none placeholder:text-[#B7B7B7] placeholder:font-[500] placeholder:text-[14px]"
          value=""
          onChange={() => {}}
          placeholder="Search by name, job title, email, template, or subteam"
        />
      </div>
    </div>
  );
};

export default TableHeader;
