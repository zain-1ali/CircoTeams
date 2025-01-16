import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../Hooks/reduxHooks";
import ColorSelector from "../Molecules/ColorSelector";
import FontSelector from "../Molecules/FontSelector";
import { setAppIconColor, setFont } from "../Redux/ProfileSlice";
import DropDown from "./DropDown/DropDown";
import Fonts from "./DropDown/Fonts";

const GeneralDesign = () => {
  const profileDesign = useAppSelector(
    (state) => state.profileHandler.profileDesign
  );
  const dispatch = useAppDispatch();
  const handleChangeAppIconColor = (color: string) => {
    dispatch(setAppIconColor(color));
  };

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpenFonts = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget); // Open the menu
  };

  const openFonts = Boolean(anchorEl);
  const handleCloseFont = () => {
    setAnchorEl(null); // Close the menu
  };

  const handleFontSelect = (font: string) => {
    dispatch(setFont(font));
    handleCloseFont();
  };
  console.log(profileDesign.profileFont);
  return (
    <div className="w-[100%] flex justify-between items-center h-[104px] rounded-[20px] bg-[#F9F9F9] pl-4 pr-4 mt-1">
      <button
        id="reassign-button"
        aria-haspopup="listbox"
        aria-controls="reassign-menu"
        onClick={handleOpenFonts}
        className="outline-none"
      >
        <FontSelector />
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
        <Fonts handleSelectFont={handleFontSelect} ActiveFont = {profileDesign.profileFont} />
      </DropDown>

      <ColorSelector
        colorType="App Icon Color"
        handleChangeColor={handleChangeAppIconColor}
        color={profileDesign?.appIconColor}
      />
    </div>
  );
};

export default GeneralDesign;
