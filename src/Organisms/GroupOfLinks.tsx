import React, { useState } from "react";
import Text from "../Atoms/Text";
import LinkRepresenterBtn from "../Molecules/LinkRepresenterBtn";
import { Icon } from "../Types";
// import { useAppSelector } from "../Hooks/reduxHooks";
import DropDown from "./DropDown/DropDown";
import LinkTypeSelector from "./DropDown/LinkTypeSelector";
import { useAppSelector } from "../Hooks/reduxHooks";

const GroupOfLinks: React.FC<any> = ({
  linksGroupData,
  changeModeToAddLink,
}) => {
  console.log(linksGroupData);
  const profileData = useAppSelector((state) => state.profileHandler);

const [typedLink, setTypedLink] = useState<any>({});

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpenFonts = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("open font worked");

    setAnchorEl(event.currentTarget); // Open the menu
  };
  const openFonts = Boolean(anchorEl);
  const handleCloseFont = () => {
    setAnchorEl(null); // Close the menu
  };

  console.log(profileData?.profileType, "profile type");

  return (
    <div className="w-[100%] mt-6">
      <Text
        text={linksGroupData?.name}
        classes="font-[600] text-[15px] text-[#7C7C7C]"
      />
      <div className="w-[100%] flex justify-start gap-x-10 gap-y-5 flex-wrap mt-3">
        {linksGroupData?.links?.map((link: Icon, i: number) => {
          return (
            <>
              <button
                id="reassign-button"
                aria-haspopup="listbox"
                aria-controls="reassign-menu"
                // onClick={handleOpenFonts}
                className="outline-none"
                onClick={
                  profileData?.profileType === "circoTemplate"
                    ? (e) => {
                        handleOpenFonts(e);
                        setTypedLink(link);
                      }
                    : () => changeModeToAddLink(link)
                }
              >
                {" "}
                <LinkRepresenterBtn key={i} link={link} />
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
                sx={{
                  "& .MuiMenu-paper": {
                    paddingTop: 0, // Remove top & bottom padding
                    borderRadius: 3, // Customize border radius
                    paddingBottom: "0px",
                    bgcolor: "transparent",
                    boxShadow: "none",
                  },
                }}
              >
                <LinkTypeSelector
                  selectLink={changeModeToAddLink}
                  link={typedLink}
                />
              </DropDown>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default GroupOfLinks;
