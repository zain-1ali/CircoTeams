import Checkbox from "../Atoms/Checkbox";
import Text from "../Atoms/Text";
import { TableRowProps } from "../Types";
import {timestampToDate} from "../Services/Constants";

import ImageWithTextCell from "../Molecules/ImageWithTextCell";

const DevicesTableRow: React.FC<TableRowProps> = ({data, handleRowSelect, isSelected}) => {

  const handleSelectedItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleRowSelect(data, e.target.checked);
  };
  return (
    <div className="w-[100%] h-[60px]  rounded-[12px] mt-3 bg-[#f9f9f9] flex items-center justify-between pl-4">
      <Checkbox
          checkValue={isSelected}
          onChange={handleSelectedItem}
          classes="h-[20px] w-[20px] border border-[#B3B3BF] rounded-[2px]"
        />
      <ImageWithTextCell
        data={
          {
            text: data?.device?.name || "",
            image: data?.profileUrl || ""
          }
        }
        containerClass="flex w-[30%] items-center gap-3"
        isAdmin={false}
      />
      <Text
        text={data?.name}
        classes="font-[600] text-[#939393] text-[12px] w-[30%]"
      />
      <Text
        text={timestampToDate(data?.device?.activationDate)}
        classes="font-[600] text-[#939393] text-[12px] w-[150px]"
      />
    </div>
  );
};

export default DevicesTableRow;
