// import React from "react";

import Button from "../Atoms/Button";
import Image from "../Atoms/Image";
// import Radio from "../Atoms/Radio";
import Text from "../Atoms/Text";
import { BsThreeDots } from "react-icons/bs";
import pm1 from "../assets/images/pm1.jpg";
import pm2 from "../assets/images/pm2.jpg";
import pw1 from "../assets/images/pw1.jpg";
import { IoMdAdd } from "react-icons/io";
import i16 from "../assets/images/i16.png";
import i17 from "../assets/images/i17.png";
import CustomModal from "../Organisms/Modal/Modal";
import { useState } from "react";
import ManageSubTeam from "../Organisms/Modal/ManageSubTeam";
import Checkbox from "../Atoms/Checkbox";

const SubTeamCard: React.FC<any> = ({ team, isChecked, handleRowSelect }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleSelectedItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleRowSelect(
      {
        ...team,
      },
      e.target.checked
    );
  };
  return (
    <div className="w-[30%] h-[154px] bg-[#FFFFFF] rounded-[16px] shadow-lg p-3">
      <div className="w-[100%] flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <label className="inline-flex items-center cursor-pointer">
            <Checkbox
              checkValue={isChecked}
              onChange={handleSelectedItem}
              classes="appearance-none h-[15px] cursor-pointer w-[15px] rounded-full border border-gray-300 checked:bg-blue-500 transition-colors duration-300"
            />
          </label>
          {/* <Radio
            classes="h-[15px] w-[15px]"
          
          /> */}
          <Text text={team?.name} classes="font-[600] text-[12px]" />
        </div>
        <BsThreeDots className="text-[#CDCCD4] cursor-pointer text-lg" />
      </div>
      <div className="flex gap-[10px] mt-3">
        <Button
          btnClasses="w-[96px] h-[27px] bg-[#2B6EF6] rounded-[22px] font-[600] text-[10px] text-white"
          onClick={() => setOpen(!open)}
          text="Manage"
        />
        <Button
          btnClasses="w-[96px] h-[27px] bg-[#9CBDFF] rounded-[22px] font-[600] text-[9px] text-white"
          onClick={() => {}}
          text="Assign Template"
        />
      </div>
      <div className="w-[100%] h-[30px]">
        <div className="flex mt-3 relative">
          <Image
            src={pw1}
            classes="h-[28px] w-[28px] rounded-full object-cover absolute "
          />
          <Image
            src={pm2}
            classes="h-[28px] w-[28px] rounded-full object-cover absolute left-[6%]"
          />
          <Image
            src={pm1}
            classes="h-[28px] w-[28px] rounded-full object-cover absolute left-[12%]"
          />

          <div className="h-[28px] w-[28px] bg-[#26C0E2] flex justify-center items-center rounded-full absolute left-[18%] cursor-pointer">
            <IoMdAdd className="text-white " />
          </div>
        </div>
      </div>

      <div className="w-[76px] flex justify-between mt-4">
        <div className="flex items-center gap-1 cursor-pointer">
          <Image src={i16} classes="h-[14px] w-[14px]" />
          <Text text="3" classes="font-[700] text-[10px] text-[#CDCCD4]" />
        </div>

        <div className="flex items-center gap-1 cursor-pointer">
          <Image src={i17} classes="h-[15px] w-[15px]" />
          <Text text="46" classes="font-[700] text-[10px] text-[#CDCCD4]" />
        </div>
      </div>

      <CustomModal
        open={open}
        onClose={() => setOpen(false)}
        style={{ height: "590px", width: "950px", borderRadius: 5, p: 4 }}
      >
        <ManageSubTeam onClose={() => setOpen(false)} team={team} />
      </CustomModal>
    </div>
  );
};

export default SubTeamCard;
