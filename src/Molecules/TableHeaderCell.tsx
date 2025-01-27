// import Image from "../Atoms/Image";
import { useState } from "react";
import Text from "../Atoms/Text";
import { tableHeaderProps } from "../Types";
// import i15 from "../assets/images/i15.png";
import { RiArrowDownSFill } from "react-icons/ri";
import DropDown from "../Organisms/DropDown/DropDown";
import Sort from "../Organisms/DropDown/Sort";

const TableHeaderCell: React.FC<tableHeaderProps> = ({
  text,
  width,
  keyName,
  data,
  setData,
}) => {
  const [anchorEl2, setAnchorEl2] = useState<HTMLElement | null>(null);

  const handleOpenTemplateFilter = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl2(event.currentTarget);
  };

  const openTemplate = Boolean(anchorEl2);
  const handleCloseTemplate = () => {
    setAnchorEl2(null);
  };
  return (
    <div className="flex items-center gap-[2px] " style={{ width: width }}>
      <Text text={text} classes="text-[#030229] font-[400] text-[14px]" />
      {/* <Image src={i15} classes="w-[8px] h-[7px]" /> */}
      <button
        id="reassignTemp-button"
        aria-haspopup="listbox"
        aria-controls="reassignTemp-menu"
        onClick={handleOpenTemplateFilter}
      >
        <RiArrowDownSFill className="text-[15px] text-[#030229] mt-[2px] cursor-pointer" />
      </button>

      <DropDown
        id="reassignTemp-menu"
        anchorEl={anchorEl2}
        open={openTemplate}
        onClose={handleCloseTemplate}
        MenuListProps={{
          "aria-labelledby": "reassignTemp-button",
          role: "listbox",
        }}
      >
        <Sort
          onClose={handleCloseTemplate}
          array={data || []}
          keyName={keyName || ""}
          setData={setData}
        />
      </DropDown>
    </div>
  );
};

export default TableHeaderCell;
