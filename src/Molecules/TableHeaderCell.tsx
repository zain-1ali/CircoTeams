// import Image from "../Atoms/Image";
import Text from "../Atoms/Text";
import { tableHeaderProps } from "../Types";
// import i15 from "../assets/images/i15.png";
import { RiArrowDownSFill } from "react-icons/ri";

const TableHeaderCell: React.FC<tableHeaderProps> = ({ text, width }) => {
  return (
    <div className="flex items-center gap-[2px] " style={{ width: width }}>
      <Text text={text} classes="text-[#030229] font-[400] text-[14px]" />
      {/* <Image src={i15} classes="w-[8px] h-[7px]" /> */}
      <RiArrowDownSFill className="text-[15px] text-[#030229] mt-[2px] cursor-pointer" />
    </div>
  );
};

export default TableHeaderCell;
