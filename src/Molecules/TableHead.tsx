import React from "react";
import { tableHeadProps } from "../Types";
import Checkbox from "../Atoms/Checkbox";

const TableHead: React.FC<tableHeadProps> = ({
  tableHeadCells,
  allSelected,
  onSelectAll,
}) => {
  return (
    <div className="w-[100%] flex  items-center justify-between pl-4">
      <div className="w-[35px]">
        <Checkbox
          checkValue={allSelected}
          onChange={(e) => onSelectAll(e.target.checked)}
          classes="h-[20px] w-[20px] border border-[#B3B3BF] rounded-[2px]"
        />
      </div>
      {tableHeadCells?.map((cell) => {
        return cell;
      })}
    </div>
  );
};

export default TableHead;
