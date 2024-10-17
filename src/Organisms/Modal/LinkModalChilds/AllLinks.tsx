import React from "react";
import Text from "../../../Atoms/Text";
import Button from "../../../Atoms/Button";
import { CiSearch } from "react-icons/ci";
import Input from "../../../Atoms/Input";
import GroupOfLinks from "../../GroupOfLinks";
import { allLinks } from "../../../assets/ReturnSocialIconsPng";
import { allLinksProps, Icon } from "../../../Types";
import { useAppDispatch } from "../../../Hooks/reduxHooks";
import { setLinkData } from "../../../Redux/linkSlice";

interface linkTypeProps {
  text: string;
}

const LinkTypeContainer: React.FC<linkTypeProps> = ({ text }) => {
  return (
    <div className="h-[46px] flex justify-center items-center px-5 bg-[#F5F5F5] rounded-[100px] cursor-pointer text-[#7C7C7C] hover:bg-[#9CBDFF] hover:text-white">
      <Text text={text} classes="font-[600] text-[14px] " />
    </div>
  );
};

const AllLinks: React.FC<allLinksProps> = ({ changeLinkMode }) => {
  const dispatch = useAppDispatch();
  const changeModeToAddLink = (link: Icon) => {
    console.log(link);

    dispatch(setLinkData(link));
    changeLinkMode("addLink");
  };

  return (
    <div className="w-[100%] h-[100%]">
      <Text text="Add Link" classes="font-[600] text-[22px]" />
      <Button
        btnClasses="w-[266px] h-[46px] font-[500] text-[15px] text-white rounded-[100px] bg-primary mt-3"
        text="+ Web Link"
        onClick={() => changeLinkMode("webLink")}
      />
      <div className="w-[100%] flex gap-4 mt-3">
        <LinkTypeContainer text="Popular" />
        <LinkTypeContainer text="Contact" />
        <LinkTypeContainer text="Social" />
        <LinkTypeContainer text="Business" />
        <LinkTypeContainer text="Content" />
        <LinkTypeContainer text="Payment" />
        <div className="w-[176px] h-[46px] bg-[#F5F5F5] rounded-[100px] flex gap-2 pl-2 items-center">
          <CiSearch className="text-[#B7B7B7] text-[24px]" />
          <Input
            placeholder="Search"
            classes="placeholder:text-[#B7B7B7] bg-transparent border-none outline-none w-[70%] "
            value=""
            onChange={() => {}}
          />
        </div>
      </div>

      <div className="w-[100%] border-t mt-10 h-[70%] overflow-y-scroll">
        {allLinks?.map((linksGroupData, i) => {
          return (
            <GroupOfLinks
              key={i}
              linksGroupData={linksGroupData}
              changeModeToAddLink={changeModeToAddLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllLinks;
