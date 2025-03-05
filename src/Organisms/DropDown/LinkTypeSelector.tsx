// import React from 'react'

import { useEffect, useState } from "react";
import Image from "../../Atoms/Image";
import Text from "../../Atoms/Text";
import { useAppSelector } from "../../Hooks/reduxHooks";
import common from "../../assets/images/common.png";
import invidual from "../../assets/images/invidual.png";
import TemplateMembers from "./TemplateMembers";
import DropDown from "./DropDown";
import { getMultipleChilds } from "../../Services/Constants";
const LinkTypeSelector: React.FC<any> = ({ changeModeToAddLink }) => {
  const profileData = useAppSelector((state) => state.profileHandler);
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState<any>([]);
  console.log(loading);

  console.log(members, "here are the members of template");

  const getMembers = (data: any) => {
    if (data) {
      setMembers(Object.values(data));
    }
  };

  useEffect(() => {
    getMultipleChilds(
      "User/",
      "templateId",
      profileData?.id,
      getMembers,
      setLoading
    );
  }, []);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget); // Open the menu
  };

  const openFonts = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null); // Close the menu
  };

  return (
    <div className="w-[383px] h-[218px] bg-white rounded-[18px] p-4 shadow-sm border">
      <Text
        text="Add link as a:"
        classes="text-[14px] font-[700] text-[#818194]"
      />
      <div
        className="w-[100%] flex justify-between mt-2"
        // onClick={changeModeToAddLink}
      >
        <div className="w-[48%] rounded-xl h-[160px] border">
          <Text
            text="Common Link"
            classes="text-[#818194] text-[13px] font-[700] text-center mt-2"
          />
          <Text
            text="The same link for everyone"
            classes="text-[#818194] text-[10px] font-[400] text-center"
          />
          <div className="w-[100%] flex justify-center mt-1">
            <Image src={common} classes="w-[154px] h-[105px]" />
          </div>
        </div>
        <button
          id="reassign-button"
          aria-haspopup="listbox"
          aria-controls="reassign-menu"
          onClick={handleOpen}
          className="w-[48%] rounded-xl h-[160px] border"
        >
          <Text
            text="Individual Link"
            classes="text-[#818194] text-[13px] font-[700] text-center mt-2"
          />
          <Text
            text="Unique content each everyone"
            classes="text-[#818194] text-[10px] font-[400] text-center"
          />
          <div className="w-[100%] flex justify-center mt-1">
            <Image src={invidual} classes="w-[154px] h-[105px]" />
          </div>
        </button>

        <DropDown
          id="reassign-menu"
          anchorEl={anchorEl}
          open={openFonts}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "reassign-button",
            role: "listbox",
          }}
        >
          <TemplateMembers
            members={members}
            onClose={handleClose}
            changeModeToAddLink={changeModeToAddLink}
          />
        </DropDown>
      </div>
    </div>
  );
};

export default LinkTypeSelector;
