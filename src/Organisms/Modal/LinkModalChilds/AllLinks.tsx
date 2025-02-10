import React, { useEffect, useState } from "react";
import Text from "../../../Atoms/Text";
import Button from "../../../Atoms/Button";
import { CiSearch } from "react-icons/ci";
import Input from "../../../Atoms/Input";
import GroupOfLinks from "../../GroupOfLinks";
import {
  allLinks,
  popular,
  contactIcons,
  socialIcons,
  business,
  media,
  payment,
} from "../../../assets/ReturnSocialIconsPng";
import { allLinksProps, Icon } from "../../../Types";
import { useAppDispatch, useAppSelector } from "../../../Hooks/reduxHooks";
import { setLinkData } from "../../../Redux/linkSlice";
import {
  setSocialLinklinkID,
  setSocialLinkName,
} from "../../../Redux/socialLinkSlice";

interface linkTypeProps {
  text: string;
  selectedLink: string;
  setSelectedLink: React.Dispatch<React.SetStateAction<string>>;
}

const LinkTypeContainer: React.FC<linkTypeProps> = ({
  text,
  selectedLink,
  setSelectedLink,
}) => {
  const linkInfo = useAppSelector((state) => state.singleLinkHandeler.linkInfo);
  const socialLink = useAppSelector((state) => state.socialLinkHandler.link);

  console.log("linkinfo:", linkInfo);
  console.log("sociallink:", socialLink);

  return (
    <div
      className={`h-[46px] flex justify-center items-center px-5 ${
        selectedLink === text
          ? "bg-[#9CBDFF] text-white"
          : "bg-[#F5F5F5] text-[#7C7C7C]"
      }  rounded-[100px] cursor-pointer  hover:bg-[#9CBDFF] hover:text-white`}
      onClick={() => setSelectedLink(text)}
    >
      <Text text={text} classes="font-[600] text-[14px] " />
    </div>
  );
};

const AllLinks: React.FC<allLinksProps> = ({ changeLinkMode }) => {
  const dispatch = useAppDispatch();
  const [selectedLink, setSelectedLink] = React.useState<string>("All");
  const [linkDataToMap, setLinkDataToMap] = React.useState<any[]>(allLinks);
  const [searchQuery, setSearchQuery] = useState("");

  const changeModeToAddLink = (link: Icon, isLinkType: boolean = false) => {
    console.log(link, "link is here");
    if (link) {
      dispatch(setLinkData(link));
    }

    if (!isLinkType) {
      changeLinkMode("addLink");
    }
  };

  const changeModeToAddWebLink = () => {
    dispatch(setSocialLinkName("Web link"));
    dispatch(setSocialLinklinkID(999));
    changeLinkMode("webLink");
  };

  const linkTypesNames = [
    "All",
    "Popular",
    "Contact",
    "Social",
    "Business",
    "Content",
    "Payment",
  ];

  useEffect(() => {
    if (selectedLink === "All") {
      setLinkDataToMap(allLinks);
    } else if (selectedLink === "Popular") {
      setLinkDataToMap([{ name: "Popular", links: [...popular] }]);
    } else if (selectedLink === "Contact") {
      setLinkDataToMap([{ name: "Contact", links: [...contactIcons] }]);
    } else if (selectedLink === "Social") {
      setLinkDataToMap([{ name: "Social", links: [...socialIcons] }]);
    } else if (selectedLink === "Business") {
      setLinkDataToMap([{ name: "Business", links: [...business] }]);
    } else if (selectedLink === "Content") {
      setLinkDataToMap([{ name: "Content", links: [...media] }]);
    } else if (selectedLink === "Payment") {
      setLinkDataToMap([{ name: "Payment", links: [...payment] }]);
    } else {
      setLinkDataToMap(allLinks);
    }
  }, [selectedLink]);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setLinkDataToMap([...allLinks]);
      return;
    }

    const results: { name: string; links: Icon[] }[] = [];
    allLinks.forEach((group) => {
      group.links.forEach((icon) => {
        if (icon.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          results.push({ name: group.name, links: [icon] });
        }
      });
    });

    setLinkDataToMap(results);
  };

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  return (
    <div className="w-[100%] h-[100%] pb-4">
      <Text text="Add Link" classes="font-[600] text-[22px]" />
      <Button
        btnClasses="w-[266px] h-[46px] font-[500] text-[15px] text-white rounded-[100px] bg-primary mt-3"
        text="+ Web Link"
        onClick={() => changeModeToAddWebLink()}
      />
      <div className="w-[100%] flex gap-4 mt-3">
        {linkTypesNames.map((linkTypeName, i) => (
          <LinkTypeContainer
            key={i}
            text={linkTypeName}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
        ))}

        <div className="w-[176px] h-[46px] bg-[#F5F5F5] rounded-[100px] flex gap-2 pl-2 items-center">
          <CiSearch className="text-[#B7B7B7] text-[24px]" />
          <Input
            placeholder="Search"
            classes="placeholder:text-[#B7B7B7] bg-transparent border-none outline-none w-[70%] "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="w-[100%] border-t mt-10 h-[70%] overflow-y-scroll">
        {linkDataToMap?.map((linksGroupData, i) => {
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
