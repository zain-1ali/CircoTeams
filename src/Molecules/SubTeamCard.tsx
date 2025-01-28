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
import DropDown from "../Organisms/DropDown/DropDown";
import SubTeamDropDown from "../Organisms/DropDown/SubTeamDropDown";
import { removeTeams } from "../Services/SubTeamsServices";
import useToastNotifications from "../Hooks/useToastNotification";

const SubTeamCard: React.FC<any> = ({
  team,
  isChecked,
  handleRowSelect,
  connections,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  console.log(loading);

  const handleOpenFonts = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget); // Open the menu
  };
  const { showError, showSuccess } = useToastNotifications();
  const openFonts = Boolean(anchorEl);
  const handleCloseFont = () => {
    setAnchorEl(null); // Close the menu
  };

  const handleSelectedItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleRowSelect(
      {
        ...team,
      },
      e.target.checked
    );
  };

  const handleDelete = () => {
    removeTeams([team], showError, showSuccess, setLoading);
  };

  const returnConnectionsLength = () => {
    if (team?.members) {
      const connectionsLength = team?.members?.map((member: any) => {
        return connections.filter(
          (connection: any) => connection?.userid === member
        );
      });
      return connectionsLength?.length;
    } else {
      return 0;
    }
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
        <button
          id="reassign-button"
          aria-haspopup="listbox"
          aria-controls="reassign-menu"
          onClick={handleOpenFonts}
        >
          <BsThreeDots className="text-[#CDCCD4] cursor-pointer text-lg" />
        </button>

        <DropDown
          id="reassign-menu"
          anchorEl={anchorEl}
          open={openFonts}
          onClose={handleCloseFont}
          MenuListProps={{
            "aria-labelledby": "reassign-button",
            role: "listbox",
          }}
        >
          <SubTeamDropDown handleDelete={handleDelete} />
        </DropDown>
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
          <Text
            text={team?.members?.length || 0}
            classes="font-[700] text-[10px] text-[#CDCCD4]"
          />
        </div>

        <div className="flex items-center gap-1 cursor-pointer">
          <Image src={i17} classes="h-[15px] w-[15px]" />
          <Text
            text={returnConnectionsLength()}
            classes="font-[700] text-[10px] text-[#CDCCD4]"
          />
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
