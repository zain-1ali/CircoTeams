import React from "react";
import { tableHeadProps } from "../Types";
import Checkbox from "../Atoms/Checkbox";

const TableHead: React.FC<tableHeadProps> = ({ tableHeadCells }) => {
  return (
    <div className="w-[100%] flex  items-center justify-between pl-4">
      <Checkbox
        checkValue={false}
        onChange={() => {}}
        classes="h-[20px] w-[20px] border border-[#B3B3BF] rounded-[2px]"
      />
      {tableHeadCells?.map((cell) => {
        return cell;
      })}
    </div>
  );
};

export default TableHead;
