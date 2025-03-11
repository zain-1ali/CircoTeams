import React, { useState } from "react";
import Text from "../Atoms/Text";
import LinkRepresenterBtn from "../Molecules/LinkRepresenterBtn";
import { Icon } from "../Types";
// import { useAppSelector } from "../Hooks/reduxHooks";
import DropDown from "./DropDown/DropDown";
import LinkTypeSelector from "./DropDown/LinkTypeSelector";

const GroupOfLinks: React.FC<any> = ({
  linksGroupData,
  changeModeToAddLink,
}) => {
  console.log(linksGroupData);
  // const profileData = useAppSelector((state) => state.profileHandler);

  // const [isInvidualLink,setIsInvidualLink]=React.useState<boolean>(false)

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const openFonts = Boolean(anchorEl);
  const handleCloseFont = () => {
    setAnchorEl(null); // Close the menu
  };

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
                  // profileData?.profileType === "circoTemplate"
                  //   ?
                  // (e) => {
                  //   handleOpenFonts(e);
                  // changeModeToAddLink(link, true);
                  // }
                  // :
                  //
                  () => changeModeToAddLink(link)
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
                // changeModeToAddLink={changeModeToAddLink}
                // selectLink={() => changeModeToAddLink(link, false)}
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
